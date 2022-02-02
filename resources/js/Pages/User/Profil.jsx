import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { useForm } from 'react-hook-form';
import { Inertia } from '@inertiajs/inertia';
import * as HiIcons from 'react-icons/hi';
import UserLayout from '../../Layouts/UserLayout';

export default function Profil() {
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

        Inertia.post("editprofil", data, {
            onError: (e) => {
                setError(e);
                console.log(e);
            },
        });
    };

    return (
        <div className="w-full flex flex-col items-center space-y-6">
           <div className="h-40 w-40 bg-blue-300 rounded-full flex items-center justify-center text-white">
                <HiIcons.HiUserCircle size={100} />
            </div>
            <div className="w-1/3">
                <form
                    onSubmit={handleSubmit(updateprofil)}
                    className="w-full space-y-4 flex flex-col items-center"
                >
                   
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
Profil.layout = (page) => <UserLayout children ={page} title="Profil" />; 
