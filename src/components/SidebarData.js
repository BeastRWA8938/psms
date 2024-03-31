import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { LuPencilLine } from "react-icons/lu";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiFillHome/>,
        cName: "nav-text"
    },
    {
        title: "Entry",
        path: "/entry",
        icon: <LuPencilLine/>,
        cName: "nav-text"
    }
]