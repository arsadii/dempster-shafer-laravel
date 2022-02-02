import React from "react";
import ListGejala from "../Components/ListGejala";
import UserLayout from "../Layouts/UserLayout";

export default function Diagnosa({datagejala}) {
    return (
        <div className='flex items-center flex-col justify-center'>
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className='text-xl text-gray-800 font-bold py-5'>Silahkan pilih gejala yang dialami</h1>
                <ListGejala datagejala={datagejala} />
            </div>
        </div>
    );
}
Diagnosa.layout = (page) => <UserLayout children={page} title="Diagnosa"/>