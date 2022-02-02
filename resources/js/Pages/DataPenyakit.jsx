import React, { useState } from "react";
import DataPenyakitTable from "../Components/DataPenyakitTable";
import Authorized from "../Layouts/Authorized";
import * as IconAi from "react-icons/ai";
import { useRecoilState } from "recoil";
import { modalpenyakit , editPenyakit, lihatPenyakit } from "../store";
import Modaldatapenyakit from "../Components/Modaldatapenyakit";
import Modaldetailpenyakit from "../Components/ModalDetailPenyakit";
import Pagination from "../Components/Pagination";
import axios from "axios";

export default function DataPenyakit(props ) {
    const [datapenyakit, setDataPenyakit] = useState(props.datapenyakit.data);
    const links = props.datapenyakit.links;
    const from = props.datapenyakit.from; 


    const [showModal, setshowModal] = useRecoilState(modalpenyakit);
    const [dataEdit, setDataEdit] = useRecoilState(editPenyakit);
    const [showDetail,setShowDetail]= useRecoilState(lihatPenyakit);
    const [cari, setCari] = useState();

    const pencarian = async() =>{
        try {
            let response= await axios.get(`caripenyakit/${cari}`);
           setDataPenyakit(response.data);
        } catch (error) {
            
        }
    }

    return (
        <div className=" relative w-full min-h-full flex justify-center">
            {showModal && <Modaldatapenyakit />}
            {showDetail && <Modaldetailpenyakit />}
            <div className="space-y-3 w-full h-full">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                        <IconAi.AiOutlineSearch
                            size={22}
                            className="text-gray-500"
                        />
                        <input
                            className="border-0 rounded-lg bg-gray-100 "
                            placeholder="Cari"
                            type="text"
                            name=""
                            id=""
                            onChange={(e)=>{
                                setCari(e.target.value); 
                                if(e.target.value ==""){
                                    setDataPenyakit(props.datapenyakit.data);
                                }
                            }} 
                            value={cari}
                            />
                         <button onClick={() => {pencarian();}} className="rounded-lg bg-indigo-500 px-4 py-2 font-bold text-white"> cari</button>
                    </div>
                    <button
                        onClick={() => {
                            setDataEdit(null); 
                            setshowModal(true);
                        }}
                        className="px-3 flex py-2 rounded-md bg-indigo-500 text-white font-bold"
                    >
                        <IconAi.AiOutlinePlus size={22} className=" " />{" "}
                        <h1 className='hidden sm:block'>Tambah Data</h1>
                    </button>
                </div>
                <DataPenyakitTable datapenyakit={datapenyakit} from={from} />
                <Pagination links={links} />
            </div>
        </div>
    );
}
DataPenyakit.layout = (page) => (
    <Authorized children={page} title="Data Penyakit" />
);
