import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { editPenyakit, modalpenyakit } from "../store";

export default function Modaldatapenyakit() {
    const [showForm, setShowForm] = useRecoilState(modalpenyakit);
    const { register, handleSubmit } = useForm();
    const dataPenyakit = useRecoilValue(editPenyakit);

    const [kode, setKode] = useState(dataPenyakit?.kode);
    const [namaPenyakit, setNamapenyakit] = useState(
        dataPenyakit?.nama_penyakit
    );
    const [keterangan, setKeterangan] = useState(dataPenyakit?.keterangan);
    const [saran, setSaran] = useState(dataPenyakit?.saran);
    const [gambar, setGambar] = useState(dataPenyakit?.gambar);

    const [error, setError] = useState();

    const insertData = (data) => {
        data["kode"] = kode;
        data["nama_penyakit"] = namaPenyakit;
        data["keterangan"] = keterangan;
        data["saran"] = saran;
        data["id"] = dataPenyakit?.id;

        if (dataPenyakit) {
            Inertia.post("/editpenyakit", data, {
                onSuccess: () => {
                    setShowForm(false);
                },
                onError: (e) => {
                    setError(e);
                },
            });
        } else {
            Inertia.post("/insertpenyakit", data, {
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
        <div
            className={`absolute w-full h-full flex ${
                dataPenyakit && "items-center"
            } justify-center`}
        >
            <div className="bg-white p-5 rounded-t-md shadow-xl w-full h-5/6 flex flex-col justify-between items-start">
                <div className="">
                    <h1 className="text-2xl text-center text-gray-800 font-bold">
                        TAMBAH DATA PENYAKIT
                    </h1>
                </div>

                <form
                    onSubmit={handleSubmit(insertData)}
                    className=" w-2/3 flex flex-col justify-between h-full"
                    encType="multipart/form-data"
                >
                    <div className="flex flex-col w-full">
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
                    <div className="flex flex-col w-full">
                        <label htmlFor="nama_penyakit">Nama Penyakit</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                setNamapenyakit(e.target.value);
                            }}
                            value={namaPenyakit}
                        />
                        {error?.nama_penyakit && (
                            <span>{error?.nama_penyakit}</span>
                        )}
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="keterangan">Keterangan</label>
                        <textarea
                            type="text"
                            onChange={(e) => {
                                setKeterangan(e.target.value);
                            }}
                            value={keterangan}
                        />
                        {error?.keterangan && <span>{error?.keterangan}</span>}
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="saran">Saran</label>
                        <textarea
                            type="text"
                            onChange={(e) => {
                                setSaran(e.target.value);
                            }}
                            value={saran}
                        />
                        {error?.saran && <span>{error?.saran}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="gambar">Gambar</label>
                        <input type="file" {...register("gambar")} />
                        {error?.gambar && <span>{error?.gambar}</span>}
                    </div>
                    {console.log(gambar)}
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
