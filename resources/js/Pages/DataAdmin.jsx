import React, { useState } from 'react';
import Authorized from '../Layouts/Authorized';
import { usePage } from '@inertiajs/inertia-react';
import { useForm } from 'react-hook-form';
import { Inertia } from '@inertiajs/inertia';
import * as BsIcons from 'react-icons/bs';

export default function DataAdmin() {
    const { auth } = usePage().props;

    const [name, setName] = useState(auth?.user.name);
    const [username, setUsername] = useState(auth?.user.username);
    const [email, setEmail] = useState(auth?.user.email);
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { register, handleSubmit } = useForm();

    const updateprofil = (data) => {
        data["name"] = name;
        data["username"] = username;
        data["email"]= email;
        data["password"] = password;
        data["id"] = auth?.user.id;

        Inertia.post("editadmin", data, {
            onError: (e) => {
                setError(e);
                console.log(e);
            },
        });
    };

    return (
        <div className="w-full flex flex-col items-center space-y-6">
            <div className="rounded-full bg-gray-100 h-48 w-48 overflow-hidden relative flex items-center justify-center">
                <div className="flex space-x-3 items-center justify-center overflow-hidden h-full w-full">
                    <img src={`/storage/${auth?.user.gambar}`} className='h-full' alt="profil" />
                </div>
            </div>
            <div className="w-1/3">
                <form
                    onSubmit={handleSubmit(updateprofil)}
                    className="w-full space-y-4 flex flex-col items-center"
                >
                    <input
                        type="file"
                        className="text-center"
                        {...register("gambar")}
                    />
                    <div className="flex justify-between w-full">
                        <label htmlFor="name">Nama</label>
                        <input
                            className="border border-gray-200 focus:ring focus:ring-skin-primary"
                            type="text"
                            name="name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}
                        />
                    </div>
                    <div className="flex justify-between w-full">
                        <label htmlFor="username">Username</label>
                        <input
                            className="border border-gray-200 focus:ring focus:ring-skin-primary"
                            type="text"
                            name="username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            value={username}
                        />
                    
                    </div>
                    <div className="flex justify-between w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            className="border border-gray-200 focus:ring focus:ring-skin-primary"
                            type="email"
                            name="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                        />
                        </div>
                    <div className="flex justify-between w-full">
                        <label htmlFor="password">Password</label>
                        <input
                            className="border border-gray-200 focus:ring focus:ring-skin-primary"
                            type="password"
                            name="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-400 text-white py-2 px-4 w-full"
                    >
                        Simpan
                    </button>
                </form>
            </div>
        </div>
    );
}
DataAdmin.layout = (page) => <Authorized children ={page} title="Admin" />; 