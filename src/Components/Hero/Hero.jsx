import React from 'react'
import './Hero.css'
import InputSearchHome from '../InputSearchHome/InputSearchHome'
export default function Hero() {
    return (
        <div className='heroContain'>

            <h1>Encontrá tu próximo hogar</h1>
            <InputSearchHome />

            <div className='carters'>
                <span>Propiedades</span>
                <span>Alquiler</span>
                <span>Cabañas</span>
                <span>Mucho más</span>
            </div>

        </div>
    )
}
