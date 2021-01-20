import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";

export const SubNavDataAdmin = [
    {
        id: '1',
        title: 'Create Product',
        path: '/create-product',
        icon: <FiIcons.FiUserPlus />,
        cName: 'subnavbox__text'
    },
    {
        id: '2',
        title: 'Transfer',
        path: '/transfer',
        icon: <BiIcons.BiTransfer />,
        cName: 'subnavbox__text'
    },
    {
        id: '3',
        title: 'Create User',
        path: '/create-user',
        icon: <AiIcons.AiOutlineUsergroupAdd />,
        cName: 'subnavbox__text'
    },
    {
        id: '4',
        title: 'Approve Transaction',
        path: '/approve-transaction',
        icon: <AiIcons.AiOutlineFileDone />,
        cName: 'subnavbox__text'
    },
    {
        id: '5',
        title: 'Privileges',
        path: '/priviledges',
        icon: <FiIcons.FiKey/>,
        cName: 'subnavbox__text'
    }
]