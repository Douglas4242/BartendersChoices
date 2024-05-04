import React from 'react'
import style from './Navbar.module.css'
import logo from '../images/tabicon.png'

const Navbar = () => {
    return (
        <div className={style.Navbar}>
            <ul>
                <li><img src={logo} /></li>
                <li className={style.NavbarText}>Home</li>
                <li className={style.NavbarText}>Especialidades</li>
                <li className={style.NavbarText}>Cadastre-se</li>
                <li className={style.NavbarText}>Fotos</li>
                <li className={style.NavbarText}>Depoimentos</li>
                <li className={style.NavbarText}>Contato</li>
            </ul>
            <ul>
                <li>Home</li>
                <li>Home</li>

            </ul>
        </div>
    )
}

export default Navbar
