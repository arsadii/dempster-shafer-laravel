import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { editGejala, lihatGejala } from "../store";

export default function Modaldetailgejala() {
    const dataGejala = useRecoilValue(editGejala);
    const [showDetail, setShowDetail] = useRecoilState(lihatGejala);
    return (
        <div className="absolute w-full h-full flex items-center justify-center">
            <div className="bg-white p-5 rounded-t-md shadow-2xl w-full">
                <h1 className="font-bold text-xl text-gray-800 text-center">
                    Detail Gejala
                </h1>
                <div className="grid grid-cols-4">
                    <div className="col-span-3 space-y-3">
                        <div className="">
                            <h1 className="text-sm text-gray-600">Kode</h1>
                            <h1 className="text-2xl font-bold text-gray-700">
                                {dataGejala.kode}
                            </h1>
                        </div>
                        <div className="">
                            <h1 className="text-sm text-gray-600">
                                Nama Gejala
                            </h1>
                            <h1 className="text-2xl font-bold text-gray-700">
                                {dataGejala.nama_gejala}
                            </h1>
                        </div>
                        <div className="space-x-4">
                            <button
                                onClick={() => {
                                    setShowDetail(false);
                                }}
                                className="bg-gray-800 p-3 text-white font-bold"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
