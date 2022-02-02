import { Inertia } from "@inertiajs/inertia";
import { data } from "autoprefixer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { editAturan, editPenyakit, lihatAturan, modalaturan } from "../store";

export default function Modaldataaturan({ penyakit, gejala }) {
    const [showForm, setShowForm] = useRecoilState(modalaturan);
    const { register, handleSubmit } = useForm();
    const dataAturan = useRecoilValue(editAturan);

    const [idPenyakit, setIdpenyakit] = useState(dataAturan?.id_penyakit);
    const [idGejala, setIdgejala] = useState(dataAturan?.id_penyakit);
    const [bobot, setBobot] = useState(dataAturan?.bobot);

    const [error, setError] = useState();

    const insertData = (data) => {
        data["id_penyakit"] = idPenyakit;
        data["id_gejala"] = idGejala;
        data["bobot"] = bobot;
        data["id"] = dataAturan?.id;

        if (dataAturan) {
            Inertia.post("/editaturan", data, {
                onSuccess: () => {
                    setShowForm(false);
                },
                onError: (e) => {
                    setError(e);
                },
            });
        } else {
            Inertia.post("/insertaturan", data, {
                onSuccess: () => {
                    setShowForm(false);
                },
                onError: (e) => {
                    setError(e);
                    console.log(e);
                },
            });
        }
    };

    return (
        <div
            className={`absolute w-full h-full flex ${
                dataAturan && "items-center"
            } justify-center`}
        >
            <div className="bg-white p-5 rounded-t-md shadow-xl w-full h-5/6 flex flex-col justify-between items-start">
                <div className="">
                    <h1 className="text-2xl text-center text-gray-800 font-bold">
                        TAMBAH DATA ATURAN
                    </h1>
                </div>

                <form
                    onSubmit={handleSubmit(insertData)}
                    className=" w-2/3 flex flex-col justify-between h-full"
                    encType="multipart/form-data"
                >
                    <div className="flex flex-col w-full">
                        <label htmlFor="id_penyakit">Nama Penyakit</label>
                        <select
                            onChange={(e) => {
                                setIdpenyakit(e.target.value);
                            }}
                            value={idPenyakit}
                        >
                            {penyakit?.map((peny, key) => {
                                return (
                                    <option key={key} value={peny.id}>
                                        {peny.nama_penyakit} 
                                    </option>
                                );
                            })}
                        </select>
                        {error?.id_penyakit && (
                            <span>{error?.id_penyakit}</span>
                        )}
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="i">Nama Gejala</label>
                        <select
                            type="text"
                            onChange={(e) => {
                                setIdgejala(e.target.value);
                            }}
                            value={idGejala}
                        >
                            {gejala?.map((gej, key) => {
                                return (
                                    <option value={gej.id}>
                                        {gej.nama_gejala}
                                    </option>
                                );
                            })}
                        </select>
                        {error?.id_gejala && <span>{error?.id_gejala}</span>}
                    </div>
                    <div className="flex flex-col w-full">
                        
                        <label htmlFor="bobot" >Bobot</label>
                        <input
                            type="text"
                            placeholder="Nilai Bobot Harus 0.1 sampai 0.9"
                            onChange={(e) => {
                                setBobot(e.target.value);
                            }}
                            value={bobot}
                        />
                        {error?.bobot && <span>{error?.bobot}</span>}
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
