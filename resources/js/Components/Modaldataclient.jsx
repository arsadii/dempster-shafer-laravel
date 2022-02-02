import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editClient, modalclient } from '../store';

export default function Modaldataclient() {
    const [showForm, setShowForm] = useRecoilState(modalclient)
    const { handleSubmit } = useForm(); 
    const dataClient = useRecoilValue(editClient);

    const [namaClient , setNamaclient] = useState (dataClient?.nama_client);
    const [lokasi , setLokasi] = useState (dataClient?.lokasi);
    const [waktu , setWaktu] = useState (dataClient?.waktu);
    

    const [error, setError] = useState();

    const insertData= (data) =>{
        let formData = new FormData();
        namaClient && formData.append("nama_client", namaClient);
        lokasi && formData.append("lokasi",lokasi );
        waktu && formData.append("waktu",waktu );
        
        dataClient && formData.append("id", dataClient?.id); 
        
        if (dataClient){
            Inertia.post("/editclient",formData,{
                onSuccess:() =>{
                    setShowForm(false);
                },
                onError: (e)=> {
                    setError(e);
                },
            });
        } else {
            Inertia.post("/insertclient", formData, {
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
                <h1>List Data Client</h1>
            </div>
            
            <form onSubmit={handleSubmit(insertData)} className="">
                <div className="">
                    <label htmlFor="nama_client">Nama Client</label>
                    <input type="text"
                    onChange={(e)=>{setNamaclient(e.target.value)
                    }}
                    value={namaClient}
                    />
                     {error?.nama_client && <span>{error?.nama_client}</span> }
                </div>
                <div className="">
                    <label htmlFor="lokasi">Lokasi</label>
                    <input type="text"
                    onChange={(e)=>{setLokasi(e.target.value)
                    }}
                    value={lokasi}
                    />
                     {error?.lokasi && <span>{error?.lokasi}</span> }
                </div>
                <div className="">
                    <label htmlFor="waktu">Waktu</label>
                    <input type="date"
                    onChange={(e)=>{setWaktu(e.target.value)
                    }}
                    value={waktu}
                    />
                     {error?.waktu && <span>{error?.waktu}</span> }
                </div>
                <div className="">
                    <button type="submit" className="bg-gray-800 p-3 text-white font-bold">Cetak</button>
                    <button type="submit" className="bg-gray-800 p-3 text-white font-bold">Kembali</button>
                </div>
            </form>
            
        </div>
    )
    }
