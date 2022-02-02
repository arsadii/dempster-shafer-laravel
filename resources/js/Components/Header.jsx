import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import { useRecoilState } from "recoil";
import { sidebar } from "../store";

export default function Header({ title, user }) {
    const [showSidebar, setshowSidebar] = useRecoilState(sidebar);
    const [Gantiicon, setGantiicon] = useState(false);
    const {auth}=usePage().props;
    return (
        <div className="bg-white h-16 w-full justify-between items-center px-5 flex shadow-xl">
            <button
                    onClick={() => {
                        if (showSidebar) {
                            setshowSidebar(false);
                        } else {
                            setshowSidebar(true);
                        }
                        if (Gantiicon) {
                            setGantiicon(false);
                        } else {
                            setGantiicon(true);
                        }
                    }}
                >
                    {Gantiicon ? (
                        <div className="bg-indigo-400 rounded-lg p-1 font-bold border-2 border-indigo-400">
                            <HiIcons.HiOutlineMenuAlt2
                                className="text-white"
                                size={20}
                            />
                        </div> 
                    ) : (
                        <div className="bg-white rounded-lg p-1 font-bold border-2 ">
                            <HiIcons.HiOutlineMenuAlt3
                                className="text-gray-700"
                                size={20}
                            />
                        </div>
                    )}
                </button>
            <h1 className="text-gray-700 font-bold text-xl">{title}</h1>
            <div className="flex">
                <div className="h-8 w-8 bg-blue-300 rounded-full flex items-center justify-center text-white overflow-hidden">
                    {auth?.user.gambar ? <img src={`/storage/${auth?.user.gambar}`} className='h-full' alt="profil" /> : <HiIcons.HiUserCircle size={26} />}
                </div>
                <span className="pl-2">Hai, {auth?.user.name}</span>
                <RiIcons.RiArrowDropDownLine
                    className="text-gray-500 hover:text-blue-400" 
                    size={24}
                />
            </div>
        </div>
    );
}
