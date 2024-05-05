import React from 'react'
import style from './Navbar.module.css'
import logo from '../images/token_2.png'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';


const Navbar = () => {
    return (
        <div className={style.Navbar}>
            <div className={style.Navbarsub}>
                <ul>
                    <a href='#Introduction'><li><img src={logo} /></li></a>
                    <li className={style.NavbarText}><Nav.Link href="#Introduction">Home</Nav.Link></li>
                    <li className={style.NavbarText}><Nav.Link href="#Specialties">Especialidades</Nav.Link></li>
                    <li className={style.NavbarText}><Nav.Link href="#SignUp">Cadastre</Nav.Link></li>
                    <li className={style.NavbarText}><Nav.Link href="#Gallery">Fotos</Nav.Link></li>
                    <li className={style.NavbarText}><Nav.Link href="#Reviews">Depoimentos</Nav.Link></li>
                    <li className={style.NavbarText}><Nav.Link href="#Contact">Contato</Nav.Link></li>
                </ul>
                <ul>
                    <a href="https://www.instagram.com"><li className={style.NavbarText}><FaInstagram size={30} /></li></a>
                    <a href="https://www.facebook.com"><li className={style.NavbarText}><FaFacebook size={30} /></li></a>
                </ul>
            </div>
        </div >
    )
}

export default Navbar
