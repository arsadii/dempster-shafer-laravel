import React from "react";
import Sidebar from "../Components/Sidebar";
import { Head, usePage } from "@inertiajs/inertia-react";
import Header from "../Components/Header";
import { RecoilRoot } from "recoil";
import swal from "sweetalert";

export default function Authorized({ children, title }) {
    const { flash } = usePage().props;

    flash?.type && swal(`${flash.title}`, `${flash.message}`, `${flash.type}`);

    return (
        <RecoilRoot>
            <div className="flex h-screen ">
                <Head title={title} />
                <Sidebar />
                <div className="flex-grow overflow-hidden h-screen flex flex-col">
                    <Header title={title} user={"wahyuni"} />
                    <div className="p-5 overflow-y-auto flex-grow">
                        {children}
                    </div>
                </div>
            </div>
        </RecoilRoot>
    );
}
