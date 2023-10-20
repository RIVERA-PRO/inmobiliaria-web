import React from 'react'
import Header from '../Pages/Header/Header'

import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import CardsHome from '../Components/CardsHome/CardsHome'
import PropiedadesHome from '../Components/PropiedadesHome/PropiedadesHome'
export default function IndexLayout() {
    return (
        <div>
            <Header />


            <Hero />
            <CardsHome />
            <PropiedadesHome />
            <Footer />
            <ButonScroll />

        </div>
    )
}
