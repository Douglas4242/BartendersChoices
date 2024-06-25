import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../images/tabicon.png'
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";



const Navbar = () => {

    const size = 30

    const [toggleMenu, setToggleMenu] = useState(false)

    const Menu = () => (
        <>
            <a href='#'><p>Home</p></a>
            <a href='#'><p>Especialidadades</p></a>
            <a href='#'><p>Fotos</p></a>
            <a href='#'><p>Depoimentos</p></a>
            <a href='#'><p>Contatos</p></a>
        </>
    )

    return (
        <div className=' section__margin bc__navbar'>
            <div className='bc__navbar-logo'>
                <img src={Logo} />
            </div>
            <div className='bc__navbar-links'>
                <Menu />
            </div>
            <div className="bc__navbar-icons">
                <div className='bc__navbar-icons_instagram'>
                    <FaInstagram size={size + 5} />
                </div>
                <div className='bc__navbar-icons_facebook'>
                    <FaFacebook size={size} />
                </div>
            </div>
            <div className='bc__navbar-menu'>
                {toggleMenu
                    ? (<IoCloseCircleSharp color='#fff' size={size} onClick={() => setToggleMenu(false)} />)
                    : (<GiHamburgerMenu color='#fff' size={size} onClick={() => setToggleMenu(true)} />)
                }
                {toggleMenu && (
                    <div className='scale-up-center bc__navbar-menu-container'>
                        <div className="bc__navbar-links-menu">
                            <Menu />
                            <div className='bc__navbar-icons-menu'>
                                <FaInstagram size={size + 5} />
                                <FaFacebook size={size} />
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Navbar
