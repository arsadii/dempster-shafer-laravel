import { Link } from "@inertiajs/inertia-react";
import React from "react";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import *as AiIcons from "react-icons/ai";
import { Inertia } from "@inertiajs/inertia";
import swal from "sweetalert";
import { useRecoilState } from "recoil";
import { sidebar } from "../../store";

export default function UserSidebar() {
    const [showSidebar, setshowSidebar] = useRecoilState(sidebar);

    const logout = () => {
        
        swal({
            title: "Apakah anda yakin ingin keluar?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                Inertia.post("logout");
            } 
          });
    };

    return (
        <div className="h-screen ">
            {showSidebar &&(
                <div className="bg-indigo-400 shadow-xl sm:w-60 w-full h-full ">
                <div className="items-center justify-center py-5 hidden sm:flex">
                    <img src="img/bkipm.png" className="w-12" alt="" />
                    <h1 className=" text-white text-3xl font-bold ">SIPAKU</h1>
                </div>
                <div className="w-full flex justify-center sm:flex-col flex-row ">
                    <Link
                        href="/userdashboard"
                        className="py-3 grid grid-cols-3 text-white"
                    >
                        <div className="col-span-1 justify-center flex">
                            <RiIcons.RiDashboardFill size={26} />
                        </div>
                        <h1 className="text-lg col-span-2 hidden sm:block">Dashboard</h1>
                    </Link>

                    <Link
                        href="/datadiri"
                        className="py-3 grid grid-cols-3 text-white"
                    >
                        <div className="col-span-1 justify-center flex">
                            <AiIcons.AiFillProfile size={26} className="col-span-1" />
                        </div>
                        <h1 className="text-lg col-span-2 hidden sm:block">Diagnosa</h1>
                    </Link>
                    <Link
                        href="/profil"
                        className="py-3 grid grid-cols-3 text-white"
                    >
                        <div className="col-span-1 justify-center flex">
                            <CgIcons.CgProfile size={26} className="col-span-1" />
                        </div>
                        <h1 className="text-lg col-span-2 hidden sm:block">Profil</h1>
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
                        <h1 className="text-lg text-left col-span-2  hidden sm:block">Keluar</h1>
                    </button>
                </div>
            </div>
            )}
            </div>
    );
}
