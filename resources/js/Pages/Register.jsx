import React from "react";
import Guest from "../Layouts/Guest";
import * as IconsBi from "react-icons/bi";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";

export default function Register(props) {

    const { flash } = usePage().props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const daftarAkun = (data) => {
        Inertia.post("/Register", data);
    };
    return (
        <div className="">
            <div className="h-screen  w-full flex justify-center items-center">
                <div className="w-3/5 flex h-a1 overflow-hidden rounded-3xl">
                    <div className="p-12 bg-blue-700 bg-opacity-70 w-3/5 shadow-xl md:flex hidden flex-col justify-center ">
                        <div className="mb-10">
                            <Link
                                href="/"
                                className="text-xs text-white hover:text-green-200"
                            >
                                <IconsBi.BiArrowBack
                                    size={20}
                                ></IconsBi.BiArrowBack>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center w-5/6">
                                <img
                                    src="/img/login.svg"
                                    alt=""
                                    className="px-5"
                                />
                            </div>
                            <div className="mt-8 text-xs italic text-white text-center">
                                Selamat Datang Di Halaman Login SIPAKU
                            </div>
                        </div>
                    </div>

                    <div className="py-8 px-10 text-center flex flex-col flex-grow bg-white  shadow-xl justify-center items-center ">
                        <div>
                            <h1 className="text-3xl font-bold text-center mb-4 text-blue-500">
                                Halaman Register
                            </h1>
                        </div>
                        <form
                            onSubmit={handleSubmit(daftarAkun)}
                            className="space-y-4 w-full"
                        >
                            <input
                                {...register("fullname", {
                                    required: true,
                                })}
                                type="text"
                                placeholder="Nama Lengkap"
                                name="fullname"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                           {errors.fullname?.type === "required" && (
                                <span className="text-red-500">
                                    Nama Lengkap tidak boleh kosong
                                </span>
                            )}
                            <input
                                {...register("username", {
                                    required: true,
                                })}
                                type="text"
                                placeholder="Username"
                                name="username"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            {errors.username?.type === "required" && (
                                <span className="text-red-500">
                                    Username tidak boleh kosong
                                </span>
                            )}
                            <input
                                {...register("email", {
                                    required: true,
                                })}
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                           {errors.email?.type === "required" && (
                                <span className="text-red-500">
                                     Email tidak boleh kosong
                                </span>
                            )}
                            <input
                                {...register("password", {
                                    required: true,
                                })}
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            {errors.password?.type === "required" && (
                                <span className="text-red-500">
                                    Password tidak boleh kosong
                                </span>
                            )}
                            <input
                                {...register("confpassword", {
                                    required: true,
                                })}
                                type="password"
                                placeholder="Konfirmasi Password" 
                                name="confpassword"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                          {errors.confpassword?.type === "required" && (
                                <span className="text-red-500">
                                    Konfirmasi Password tidak boleh kosong
                                </span>
                            )}
                            <div className="text-center mt-6 w-full">
                                <button
                                    type="submit"
                                    className="w-full block py-2 text-xl shadow-sm text-blue-400 border-2 hover:text-white hover:bg-green-400 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30"
                                >
                                    Buat Akun
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
Register.layout = (page) => <Guest children={page} title="Registrasi" />;
