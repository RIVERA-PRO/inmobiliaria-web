import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import InputSearch from '../InputSerach/InputSearchs'
import InfoUser from '../InfoUser/InfoUser'
import logo from '../../images/logo.png'
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    let [modalUser, setModalUser] = useState(false);




    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? "navbar scrolled " : "navbar"}>
            <nav >

                <Anchor to={`/`} className='logo'>
                    <img src={logo} alt="logo" />
                    <h1>Inmobiliaria</h1>
                </Anchor>


                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <Anchor to={`/`} className='logo-nav'>
                        <img src={logo} alt="logo" />
                        <h1>Inmobiliaria</h1>
                    </Anchor>
                    <div className='enlaces'>
                        <Anchor to={`/`} >Inico</Anchor>
                        <Anchor to={`/propiedades`} >Propiedades</Anchor>
                        <Anchor to={`/propiedades`} >Propiedades</Anchor>
                        <Anchor to={`/propiedades`} >Propiedades</Anchor>
                    </div>


                </div>
                <div className='input-enlaces'>
                    <div className='enlaces2'>
                        <Anchor to={`/`} >Inico</Anchor>
                        <Anchor to={`/propiedades`} >Propiedades</Anchor>
                        <Anchor to={`/Propiedades`} >Propiedades</Anchor>
                        <Anchor to={`/propiedades`} >Propiedades</Anchor>
                    </div>
                    <div>
                        <InputSearch />
                    </div>
                </div>

                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <InfoUser />




                {modalUser && (
                    <div className="modal_content">
                        <div className="modal-nav">





                        </div>
                    </div>
                )}
            </nav>


        </header>
    );
}
