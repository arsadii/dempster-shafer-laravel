import React from 'react'
import { RecoilRoot, useRecoilState } from 'recoil';
import UserSidebar from '../Components/User/UserSidebar';
import { Head, usePage } from "@inertiajs/inertia-react";
import Header from '../Components/Header';
import { sidebar } from '../store';

export default function UserLayout(props) {
    const {flash} = usePage().props;

    flash?.type && swal(`${flash?.title}`, `${flash?.message}`, `${flash?.type}`)
 
    return (
        <RecoilRoot>
        <div className="flex h-screen flex-col-reverse sm:flex-row ">
            <Head title={props?.title}/>
            <UserSidebar/>
            <div className="flex-grow overflow-hidden h-screen flex flex-col">
                <div className="h-16">
                <Header title={props?.title} user={"wahyuni"} />
                </div>
                <div className="p-5 overflow-y-auto flex-grow">
                    {props.children} 
                </div>
                </div> 
        </div> 
        </RecoilRoot>
    )
}
