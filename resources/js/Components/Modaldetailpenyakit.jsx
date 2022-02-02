import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { editPenyakit, lihatPenyakit } from "../store";

export default function Modaldetailpenyakit() {
    const dataPenyakit = useRecoilValue(editPenyakit);
    const [showDetail,setShowDetail]= useRecoilState(lihatPenyakit);
    return (
        <div className="bg-white p-5 rounded-t-md shadow-xl absolute w-full">

            <h1 className=" font-bold text-xl text-white text-center border-gray-800">
                Detail Penyakit
            </h1>
            <div className="grid grid-cols-4">
                <div className="col-span-1 flex items-center justify-center">
                    <img
                        className="h-48 w-48 rounded-full"
                        src={`storage/${dataPenyakit.gambar}`}
                        alt=""
                    />
                </div>
                <div className="col-span-3 space-y-3">
                    <div className="">
                        <h1 className="text-sm text-gray-600">Kode</h1>
                        <h1 className='text-2xl font-bold text-gray-700'>{dataPenyakit.kode}</h1>
                    </div>
                    <div className="">
                        <h1 className="text-sm text-gray-600">Nama Penyakit</h1>
                        <h1 className='text-2xl font-bold text-gray-700'>{dataPenyakit.nama_penyakit}</h1>
                    </div>
                    <div className="">
                        <h1 className="text-sm text-gray-600">Keterangan</h1>
                        <h1 className='text-2xl font-bold text-gray-700'>{dataPenyakit.keterangan}</h1>
                    </div>
                    <div className="">
                        <h1 className="text-sm text-gray-600">Saran</h1>
                        <h1 className='text-2xl font-bold text-gray-700'>{dataPenyakit.saran}</h1>
                    </div>
                    <div className="space-x-4">
                    <button onClick={() =>{ setShowDetail(false);}} 
                    className="bg-gray-800 p-3 text-white font-bold">Tutup</button>
                </div>
                </div>
            </div>
        </div>
    );
}
