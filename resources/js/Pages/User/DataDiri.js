import React from 'react';
import FormDataDiri from '../../Components/FormDataDiri';
import UserLayout from '../../Layouts/UserLayout';


export default function DataDiri() {
    return (
        <div className='min-h-full flex items-center flex-col justify-center'>
            <FormDataDiri/>
        </div>
    )
}

DataDiri.layout = (page) => <UserLayout children={page} title="Data Diri"/>
