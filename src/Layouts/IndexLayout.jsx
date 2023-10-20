import React from 'react'
import Header from '../Pages/Header/Header'

import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'


export default function IndexLayout() {
    return (
        <div>
            <Header />


            <Hero />

            <Footer />
            <ButonScroll />

        </div>
    )
}
