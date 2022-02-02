import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { editGejala, modalgejala } from "../store";
import { data } from "autoprefixer";

export default function Modaldatagejala() {
    const [showForm, setShowForm] = useRecoilState(modalgejala);
    const { handleSubmit } = useForm();
    const dataGejala = useRecoilValue(editGejala);

    const [kode, setKode] = useState(dataGejala?.kode);
    const [namaGejala, setNamagejala] = useState(dataGejala?.nama_gejala);

    const [error, setError] = useState();

    const insertData = (data) => {
        let formData = new FormData();
        kode && formData.append("kode", kode);
        namaGejala && formData.append("nama_gejala", namaGejala);

        dataGejala && formData.append("id", dataGejala?.id);

        if (dataGejala) {
            Inertia.post("/editgejala", formData, {
                onSuccess: () => {
                    setShowForm(false);
                },
                onError: (e) => {
                    setError(e);
                },
            });
        } else {
            Inertia.post("/insertgejala", formData, {
                onSuccess: () => {
                    setShowForm(false);
                },
                onError: (e) => {
                    setError(e);
                },
            });
        }
    };
    return (
        <div className={`absolute w-full h-full flex ${dataGejala && 'items-center'} justify-center`}> 
            <div className="bg-white p-5 rounded-t-md shadow-xl w-full h-96 flex flex-col justify-between items-start">
                <div className="">
                    <h1 className="text-2xl text-center text-gray-800 font-bold">
                        TAMBAH DATA GEJALA
                    </h1>
                </div>

                <form onSubmit={handleSubmit(insertData)} className="flex flex-col justify-between h-full w-2/3">
                    <div className="flex flex-col">
                        <label htmlFor="kode">Kode</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                setKode(e.target.value);
                            }}
                            value={kode}
                        />
                        {error?.kode && <span>{error?.kode}</span>}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="nama_gejala">Nama Gejala</label>
                        <textarea 
                            type="text"
                            onChange={(e) => {
                                setNamagejala(e.target.value);
                            }}
                            value={namaGejala}
                        />
                        {error?.nama_gejala && (
                            <span>{error?.nama_gejala}</span>
                        )}
                    </div>
                    <div className="space-x-4">
                        <button
                            type="submit"
                            className="bg-green-500 p-3 text-white font-bold"
                        >
                            Simpan
                        </button>
                        <button
                            onClick={() => {
                                setShowForm(false);
                            }}
                            className="bg-gray-800 p-3 text-white font-bold"
                        >
                            Batal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
