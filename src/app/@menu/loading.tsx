import {Dropdown, MenuButton, Skeleton} from "@mui/joy";
import React from "react";

export default async function LoadingMenu(){

    return (
        <Dropdown>
            <MenuButton size="lg">
                <Skeleton animation="wave" variant="rectangular" width={'10vw'} height={48}/>
            </MenuButton>
        </Dropdown>
    );
}