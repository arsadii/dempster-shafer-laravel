import React, { useState } from "react";
import { useRecoilState } from "recoil";
import DataAturanTable from "../Components/DataAturanTable";
import Authorized from "../Layouts/Authorized";
import { editAturan, lihatAturan, modalaturan } from "../store";
import * as IconAi from "react-icons/ai";
import Modaldataaturan from "../Components/Modaldataaturan";
import axios from "axios";

export default function DataAturan(props) {
    const [dataaturan, setDataAturan] = useState(props.dataaturan.data);
    const links = props.dataaturan.links;
    const from = props.dataaturan.from; 
    const penyakit = props.datapenyakit;
    const gejala = props.datagejala; 
 
    const [showModal, setShowModal] = useRecoilState(modalaturan)
    const [showDetail,setShowDetail]= useRecoilState(lihatAturan);
    const [dataEditPenyakit, setDataEditAturan] = useRecoilState(editAturan);

    const [cari, setCari] = useState();

    const pencarian = async () => {
        try {
            let response = await axios.get(`cariaturan/${cari}`);
            setDataAturan(response.data);
        } catch (error) {}
    };
    return (
        <div className="relative space-y-3 min-h-full"> 
            {showModal && <Modaldataaturan penyakit={penyakit} gejala={gejala} />}
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
                        onChange={(e) => {
                            setCari(e.target.value);
                            if (e.target.value == "") {
                                setDataAturan(props.dataaturan.data);
                            }
                        }}
                        value={cari} 
                    />
                    <button
                        onClick={() => {
                            pencarian();
                        }}
                        className="rounded-lg bg-indigo-500 px-4 py-2 font-bold text-white"
                    >
                        {" "}
                        cari
                    </button>
                </div>
                <button
                    onClick={() => {
                        setShowModal(true);
                    }}
                    className="px-3 flex py-2 rounded-md bg-indigo-500 text-white font-bold"
                >
                    <IconAi.AiOutlinePlus size={22} className=" " />{" "}
                    <h1 className='hidden sm:block'>Tambah Data</h1>
                </button>
            </div>
            <DataAturanTable dataaturan={dataaturan} from={from} />
        </div>
    );
}
DataAturan.layout = (page) => (
    <Authorized children={page} title="Data Aturan" />
);
