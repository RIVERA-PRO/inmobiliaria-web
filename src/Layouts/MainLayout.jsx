import React from 'react'
import Header from '../Pages/Header/Header'
import { Outlet } from "react-router-dom";
import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Footer from '../Components/Footer/Footer'
export default function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />

            <Footer />
            <ButonScroll />
        </div>
    )
}
