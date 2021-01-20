import React from 'react';
// import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";

export const SubNavData = [
    {
        id: '1',
        title: 'Create Product',
        path: '/create-product',
        icon: <FiIcons.FiUserPlus />,
        cName: 'sub-text'
    },
    {
        id: '2',
        title: 'Transfer',
        path: '/transfer',
        icon: <BiIcons.BiTransfer />,
        cName: 'sub-text'
    }
]