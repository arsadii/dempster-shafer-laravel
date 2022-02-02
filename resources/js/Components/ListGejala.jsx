import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { useForm } from "react-hook-form";

export default function ListGejala({ datagejala }) {
    const { register, handleSubmit } = useForm();

    const cekdiagnosa = (data) => {
        Inertia.post("/diagnosa", data, {
            onError: (e) => {
                console.log(e);
            },
        });
    };
    return (
        <div className="bg-white rounded-xl shadow-lg w-2/3 p-5">
            <form
                onSubmit={handleSubmit(cekdiagnosa)}
                className="flex flex-col"
            >
                <div className="flex flex-col">
                    {datagejala.map((gejala, key) => {
                        return (
                            <label key={key} className="inline-flex  mt-3">
                                <input
                                    type="checkbox"
                                    name="gejala"
                                    {...register("gejala")}
                                    value={gejala.id}
                                    className="form-checkbox h-5 w-5 text-green-400"
                                />
                                <span className="ml-2 text-gray-700">
                                    {gejala.nama_gejala}
                                </span>
                            </label>
                        );
                    })}
                </div>

                <button
                    type="submit"
                    className="p-3 mt-4 rounded-lg text-white bg-green-400 text-center"
                >
                    Proses
                </button>
            </form>
        </div>
    );
}
