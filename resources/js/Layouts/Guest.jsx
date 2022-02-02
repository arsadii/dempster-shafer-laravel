import React, { useEffect } from 'react';
import {Head, usePage} from "@inertiajs/inertia-react";
import Home from '../Pages/Home';
import Navbar from '../Components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';


export default function Guest({ children, title}) {

    const { flash } = usePage().props;
    
    useEffect(() => {
        if(flash.type) {
            swal(`${flash.title}`, `${flash.message}`, `${flash.type}`)
        }
    })
    
    return (
        <div className='h-screen flex flex-col'>
            {console.log(flash)}
            {/* <Toaster /> */}
            <Head title={title} />
            <Navbar />
            <div className="flex-grow overflow-y-auto">
            {children}
            </div>
        </div>
    )
}
