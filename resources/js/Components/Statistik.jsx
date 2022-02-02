import React from 'react'
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";

export default function () {
    return (
        <div className='grid sm:grid-cols-3 grid-rows-3 gap-4 bg-white p-8 shadow-xl rounded-xl'>
            <div className="bg-white flex items-center justify-between p-3 rounded-lg border-2 border-yellow-400 h-32">
                <div className="p-2 bg-yellow-400 w-20 h-20 flex items-center justify-center text-white rounded-lg">
                    <IoIcons.IoMdMedical size={28}/>
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-3xl font-bold">8</div>
                    <div className="font-semibold text-sm text-gray-700">Jumlah Data Penyakit</div>
                </div>
            </div>

            <div className="bg-white flex items-center justify-between  p-3 rounded-lg border-2 border-indigo-400 h-32">
                <div className="p-2 bg-indigo-400 w-20 h-20 flex items-center justify-center text-white rounded-lg">
                    <GiIcons.GiMedicalThermometer size={28}/>
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-3xl font-bold">20</div>
                    <div className="font-semibold text-sm text-gray-700">Jumlah Data Gejala</div>
                </div>
            </div>

            <div className="bg-white flex items-center justify-between p-3 rounded-lg border-2 border-green-400 h-32">
                <div className="p-2 bg-green-400 w-20 h-20 flex items-center justify-center text-white rounded-lg">
                    <AiIcons.AiFillDatabase size={28}/>
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-3xl font-bold">8</div>
                    <div className="font-semibold text-sm text-gray-700">Jumlah Data Client</div>
                </div>
            </div>
        </div>
    )
}
