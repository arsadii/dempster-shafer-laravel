import React, { useState } from "react";
import { useRecoilState } from "recoil";
import DataGejalaTable from "../Components/DataGejalaTable";
import Modaldatagejala from "../Components/Modaldatagejala";
import Authorized from "../Layouts/Authorized";
import { editGejala, lihatGejala, lihatPenyakit, modalgejala } from "../store";
import * as IconAi from "react-icons/ai";
import Modaldetailgejala from "../Components/Modaldetailgejala";
import Pagination from "../Components/Pagination";
import axios from "axios";

export default function DataGejala(props) {
    const [datagejala, setDataGejala] = useState(props.datagejala.data);
    const links = props.datagejala.links;
    const from = props.datagejala.from;

    const [showModal, setshowModal] = useRecoilState(modalgejala);
    const [showDetail, setShowDetail] = useRecoilState(lihatGejala);
    const [dataEdit, setDataEdit] = useRecoilState(editGejala);
    const [cari, setCari] = useState();

    const pencarian = async () => {
        try {
            let response = await axios.get(`carigejala/${cari}`);
            setDataGejala(response.data);
        } catch (error) {}
    };
    return (
        <div className="relative w-full min-h-full flex justify-center">
            {showModal && <Modaldatagejala />}
            {showDetail && <Modaldetailgejala />}
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
                            onChange={(e) => {
                                setCari(e.target.value);
                                if (e.target.value == "") {
                                    setDataGejala(props.datagejala.data);
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
                            setDataEdit(null);
                            setshowModal(true);
                        }}
                        className="px-3 flex py-2 rounded-md bg-indigo-500 text-white font-bold"
                    >
                        <IconAi.AiOutlinePlus size={22} className=" " />{" "}
                        <h1 className='hidden sm:block'>Tambah Data</h1>
                    </button>
                </div>
                <DataGejalaTable datagejala={datagejala} from={from} />
                <Pagination links={links} />
            </div>
        </div>
    );
}
DataGejala.layout = (page) => (
    <Authorized children={page} title="Data Gejala" />
);
