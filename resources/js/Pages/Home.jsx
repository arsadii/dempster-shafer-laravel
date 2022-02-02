import React from 'react'
import Navbar from '../Components/Navbar';
import Guest from '../Layouts/Guest'

export default function Home() {
    return (
        <div>
            
            <div className="h-full overflow-y-auto w-full bg-gray-50">
                <div className="bg-hero h-4/5 flex items-center w-full relative">
                    <span className="bg-indigo-900 bg-opacity-80 absolute w-full h-full z-10"></span>
                    <div className="flex justify-center py-20  items-center w-full z-20">
                        <div className="flex flex-col items-center w-full space-y-5 z-20 px-20">
                            <h1 className="text-5xl font-bold text-white">Diagnosa Penyakit Udang</h1>
                            <p className="text-white">Ayo kenali penyakit udang vaname lebih awal</p>
                            <a href="/userdashboard" className="bg-white w-44 sm:w-96 text-center rounded-xl shadow-xl p-3 font-bold bg-gradient-to-r from-red-600 to-yellow-500 text-white transition-all duration-300 transform hover:scale-105">Diagnosa Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Home.layout = (page) => <Guest children={page} title="Home" />;