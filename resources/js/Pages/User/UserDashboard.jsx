import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import UserLayout from '../../Layouts/UserLayout'

export default function UserDashboard() {
    return (
        <div className=" w-full h-full p-5 space-x-8 flex justify-center items-start ">
            <Link href="/diagnosa" className="bg-white px-12 py-3 rounded-xl shadow-xl border-indigo-500 border-2 w-72 text-center hover:scale-105 transform transition-all duration-700">Diagnosa Sekarang</Link>
            <Link className="bg-white px-12 py-3 rounded-xl shadow-xl border-2 border-indigo-500 w-72 text-center hover:scale-105 transform transition-all duration-700">Lihat Riwayat Diagnosa</Link>
            
        </div>
    )
}

UserDashboard.layout = page => <UserLayout children={page}  title={'Dashboard User'} />
