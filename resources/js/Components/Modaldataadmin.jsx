import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editAdmin, modaladmin } from '../store';

export default function Modaldataadmin() {
    const [showForm, setShowForm] = useRecoilState(modaladmin);
    const { handleSubmit} = useForm(); 
    const dataAdmin = useRecoilValue(editAdmin);

    const [name , setName] = useState(dataAdmin?.name);
    const [username, setUsername] = useState(dataAdmin?.username);
    const [email, setEmail] = useState(dataAdmin?.email);
    const [password, setPassword] = useState(dataAdmin?.password);

    const [error, setError] = useState();

    const insertData= (data) =>{
        let formData = new FormData();
        name && formData.append("nama", name);
        username && formData.append("username", username);
        email && formData.append("email",email );
        password && formData.append("password", password);
        dataAdmin && formData.append('id', dataAdmin.id);

        if (dataAdmin){
            Inertia.post("/editadmin",formData,{
                onSuccess:() =>{
                    setShowForm(false);
                },
                onError: (e)=> {
                    setError(e);
                },
            });
        } else {
            Inertia.post("/insertadmin", formData, {
                onSuccess:()=> {
                    setError(false);
                },
                onError: (e)=>{
                    setError(e);
                },
            });
        }    
    };
    return (
        <div className="bg-white p-5 rounded-t-md shadow-xl absolute">
            <div className="">
                <h1 className="text-2xl text-center text-gray-800 font-bold">Tambah Data Admin</h1>
            </div>
            
            <form onSubmit={handleSubmit(insertData)} className="space-y-5">
                <div className="flex flex-col">
                    <label htmlFor="nama">Nama</label>
                    <input type="text"
                     onChange={(e)=>{setName(e.target.value)
                     }}
                     value={name}
                     />
                     {error?.nama && <span>{error?.nama}</span> }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                    onChange={(e)=>{setUsername(e.target.value)
                    }}
                    value={username}
                    />
                    {error?.username && <span>{error?.username}</span> }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                     onChange={(e)=>{setEmail(e.target.value)
                     }}
                     value={email}
                     />
                     {error?.email && <span>{error?.email}</span> }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="text"
                     onChange={(e)=>{setPassword(e.target.value)
                     }}
                     value={password}
                     />
                     {error?.password && <span>{error?.password}</span> }
                </div>
                <div className="space-x-4">
                    <button type="submit" className="bg-green-500 p-3 text-white font-bold">Simpan</button>
                    <button onClick={() =>{ setShowForm(false);}} 
                    className="bg-gray-800 p-3 text-white font-bold">Batal</button>
                </div>
            </form>
            
        </div>
    )
}