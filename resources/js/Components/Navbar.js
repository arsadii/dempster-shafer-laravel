import { Link } from '@inertiajs/inertia-react'

import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="w-full h-24 items-center bg-white shadow-lg px-5 py-3 flex justify-between">
                <div className="px-8">
                    <a href="/"className="flex items-center">
                    <img src="img/bkipm.png" className="w-12" alt="" />
                        <h1 className="text-xl font-bold text-gray-700">Sistem Pakar Diagnosa Penyakit Udang Vaname</h1>
                    </a>
                </div>

                <div className="px-8">
                    <nav className='space-x-10 flex items-center'>
                        <div className="space-x-5">
                            <Link href="">About</Link>
                            <Link href="/login">Masuk</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
