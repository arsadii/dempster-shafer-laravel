import React from 'react';
import Authorized from '../Layouts/Authorized';
import * as IconsAi from "react-icons/ai";
import { modalclient } from '../store';
import { useRecoilState } from 'recoil';
import Modaldataclient from '../Components/Modaldataclient';
import DataClientTable from '../Components/DataClientTable';

export default function DataClient({dataclient}) {
    const [showModal, setshowModal] = useRecoilState(modalclient);
    return (
        <div className="space-y-3">
            {showModal && <Modaldataclient />}
            <div className="flex justify-between">
                <div className="flex items-center space-x-3">
                    <IconsAi.AiOutlineSearch
                        size={22}
                        className="text-gray-500"
                    />
                    <input
                        className="border-0 rounded-lg bg-gray-100 "
                        placeholder="Cari"
                        type="text"
                        name=""
                        id=""
                    />
                </div>
               
            </div>
            <DataClientTable dataclient={dataclient} />
        </div>
    );
}
DataClient.layout = (page) => <Authorized children ={page} title="Data Client" />;