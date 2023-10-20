import { React, useEffect } from 'react'
import './Hero.css'
import InputSearchHome from '../InputSearchHome/InputSearchHome'
export default function Hero() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
