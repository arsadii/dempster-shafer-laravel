import React from 'react'
import Hasil from '../Components/Hasil'
import Guest from '../Layouts/Guest';

export default function HasilDiagnosa() {
    return (
        <div className='h-screen w-screen'>
         <h1 className="text-center py-5 font-bold text-2xl"></h1>
            <Hasil />
        </div>
    );
}
HasilDiagnosa.layout = (page) => <Guest children={page} title="Hasil Diagnosa" />;
