import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Inertia } from "@inertiajs/inertia";
import swal from "sweetalert";
import { useRecoilState } from "recoil";
import { sidebar } from "../store";

export default function Sidebar() {
    const [showSidebar, setshowSidebar] = useRecoilState(sidebar);
    const logout = () => {
        swal({
            title: "Apakah anda yakin ingin keluar?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                Inertia.post("logout");
            }
        });
    };

    return (
        <div className="h-full">
            {showSidebar && (
                <div className=" bg-indigo-400 shadow-xl w-60 h-full">
                    <div className="flex items-center justify-center py-5  text-white bg-indigo-400 ">
                        <img src="img/bkipm.png" className="w-12" alt="" />
                        <h1 className=" text-white text-3xl font-bold ">
                            SIPAKU
                        </h1>
                    </div>
                    <div className="w-full flex justify-center flex-col ">
                        <Link
                            href="/dashboard"
                            className="py-3 grid grid-cols-3 text-white"
                        >
                            <div className="col-span-1 justify-center flex">
                                <RiIcons.RiDashboardFill size={26} />
                            </div>
                            <h1 className="text-lg col-span-2">Dashboard</h1>
                        </Link>

                        <Link
                            href="/datapenyakit"
                            className="py-3 grid grid-cols-3 text-white"
                        >
                            <div className="col-span-1 justify-center flex">
                                <IoIcons.IoMdMedical
                                    size={26}
                                    className="col-span-1"
                                />
                            </div>
                            <h1 className="text-lg col-span-2">
                                Data Penyakit
                            </h1>
                        </Link>

                        <Link
                            href="/datagejala"
                            className="py-3 grid grid-cols-3 text-white"
                        >
                            <div className="col-span-1 justify-center flex">
                                <GiIcons.GiMedicalThermometer
                                    size={26}
                                    className="col-span-1"
                                />
                            </div>
                            <h1 className="text-lg col-span-2">Data Gejala</h1>
                        </Link>

                        <Link
                            href="/dataaturan"
                            className="py-3 grid grid-cols-3 text-white"
                        >
                            <div className="col-span-1 justify-center flex">
                                <FaIcons.FaCommentMedical
                                    size={26}
                                    className="col-span-1"
                                />
                            </div>
                            <h1 className="text-lg col-span-2">Data Aturan</h1>
                        </Link>

                        <Link
                            href="/dataclient"
                            className="py-3 grid grid-cols-3 text-white"
                        >
                            <div className="col-span-1 justify-center flex">
                                <AiIcons.AiFillDatabase
                                    size={26}
                                    className="col-span-1"
                                />
                            </div>
                            <h1 className="text-lg col-span-2">Data Client</h1>
                        </Link>

                        <Link
                            href="/admin"
                            className="py-3 grid grid-cols-3 text-white"
                        >
                            <div className="col-span-1 justify-center flex">
                                <RiIcons.RiAdminFill
                                    size={26}
                                    className="col-span-1"
                                />
                            </div>
                            <h1 className="text-lg col-span-2">Admin</h1>
                        </Link>
                        <button
                            onClick={() => {
                                logout();
                            }}
                            className="py-3 grid grid-cols-3 text-white"
                        >
                            <div className="col-span-1 justify-center flex">
                                <FaIcons.FaSignOutAlt
                                    size={26}
                                    className="col-span-1" 
                                />
                            </div>
                            <h1 className="text-lg text-left col-span-2">
                                Keluar
                            </h1>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
