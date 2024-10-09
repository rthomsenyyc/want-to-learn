'use client';

import createCache from '@emotion/cache';
import {useServerInsertedHTML} from 'next/navigation';
import {CacheProvider} from '@emotion/react';
import {CssVarsProvider} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import {ReactNode, useState} from "react";


function createOptimizedCache(key: string) {
    const cache = createCache({key});
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted = new Set<string>();

    cache.insert = (...args) => {
        const serialized = args[1];
        if (cache.inserted[serialized.name] === undefined) {
            inserted.add(serialized.name);
        }
        return prevInsert(...args);
    };

    const flush = () => {
        const prevInserted = Array.from(inserted);
        inserted.clear();
        return prevInserted;
    };

    return {cache, flush};
}

/**
 * [This component is directly from the  Material UI documentation for Next.js app router.](https://next.mui.com/joy-ui/integrations/next-js-app-router/)
 * @param children [ReactNode]
 */
export default function ThemeRegistry({children}: Readonly<{ children: ReactNode }>) {
    const [{cache, flush}] = useState(() => createOptimizedCache('joy'));

    useServerInsertedHTML(() => {
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = '';
        for (const name of names) {
            styles += cache.inserted[name];
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        );
    });

    return (
        <CacheProvider value={cache}>
            <CssVarsProvider>
                <CssBaseline/>
                {children}
            </CssVarsProvider>
        </CacheProvider>
    );
}