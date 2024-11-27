import {Suspense} from "react";
import LoadingMenu from "@/app/_menu/loading";
import Menu from "@/app/_menu/page";

export default async function MenuLayout(){

    return <Suspense fallback={<LoadingMenu/>}>
        <Menu />
    </Suspense>
}