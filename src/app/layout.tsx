import type {Metadata} from "next";
import {ReactNode} from "react";
import '@fontsource/inter';
import ThemeRegistry from "@/components/providers/ThemeRegistry";


export const metadata: Metadata = {
    title: "Demonstration Application",
    description: "An application with a combination new to me tech (Next.js, React server components, Joy UI) and some old technology friends (React, Node, Oauth)",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <ThemeRegistry>
            {children}
        </ThemeRegistry>
        </body>
        </html>
    );
}
