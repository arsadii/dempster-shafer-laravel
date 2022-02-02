import React from 'react';
import Statistik from '../Components/Statistik';
import Authorized from '../Layouts/Authorized';

export default function Dashboard() {
    return (
        <div className="min-h-screen ">
           <Statistik />
        </div>
    )
}
Dashboard.layout = (page) => <Authorized children ={page} title="Dashboard" />;