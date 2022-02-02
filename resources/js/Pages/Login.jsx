import React, { useEffect, useState } from "react";
import Guest from "../Layouts/Guest";
import * as IconsBi from "react-icons/bi";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const cekLogin = (data) => {
        var formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        Inertia.post("/login", data, {
            onError: (e)=> {
                swal('Maaf', `${e.failed}`, 'error');
            }
        });
    };
    useEffect(() => {}, []);

    return (
        <Guest title="Login Page"> 
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
                            <form onSubmit={handleSubmit(cekLogin)}>
                                <div>
                                    <h1 className="text-3xl font-bold text-center mb-4 text-blue-500">
                                        Halaman Masuk
                                    </h1>
                                </div>
                                <div className="space-y-4 w-full">
                                    <input
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                        }}
                                        value={username}
                                        {...register("username", {
                                            required: true,
                                            minLength: 2,
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
                                    {errors.username?.type === "miLength" && (
                                        <span className="text-red-500">
                                            Username Minimal 5 karakter
                                        </span>
                                    )}
                                    <input
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        value={password}
                                        {...register("password", {
                                            required: true,
                                        })}
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    />
                                    {errors?.password && (
                                        <span className="text-red-500">
                                            Password tidak boleh kosong
                                        </span>
                                    )}
                                </div>
                                <div className="text-center mt-6 w-full">
                                    <button
                                        type="submit"
                                        className="w-full block py-2 text-xl shadow-sm text-blue-400 border-2 hover:text-white hover:bg-green-400 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30"
                                    >
                                        Masuk
                                    </button>
                                    <p className="mt-4 text-sm">
                                        Belum Punya Akun?{" "}
                                        <Link
                                            href="/Register"
                                            className="underline hover:text--400 cursor-pointer"
                                        >
                                            Buat Akun
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
}

// Login.layout =(page) => <Guest children={page} title="Login Page" />;
