import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function FormDataDiri() {
    return (
        <div className='w-full'>
            <div className="flex justify-center ">
                <div className="bg-white w-1/3 rounded-xl shadow-xl overflow-hidden">
                    <h1 className=" text-indigo-600 p-3 text-center font-bold text-xl">Silahkan Isi Data Diri</h1>
                    <div className="p-5 grid gap-3">
                        <div className="grid grid-cols-3 items-center">
                            <h1>Nama</h1>
                            <input className="col-span-2 p-3 border-2 border-gray-200 rounded-lg" type="text" />
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <h1>Lokasi</h1>
                            <textarea className="col-span-2 p-3 border-2 border-gray-200 rounded-lg"  type="text" />
                        </div>
                        <div className="flex justify-end">
                            <Link href='/diagnosa' className=" w-full text-center rounded-xl p-3 font-bold  bg-gradient-to-r from-red-600 to-yellow-500 text-white transition-all duration-300 transform hover:scale-105 ">Diagnosis</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
