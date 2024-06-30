import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../images/Logo.svg'
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";



const Navbar = () => {

    const size = 30

    const [toggleMenu, setToggleMenu] = useState(false)

    const Menu = () => (
        <>
            <a href='#'><p>Home</p></a>
            <a href='#specialists'><p>Especialidadades</p></a>
            <a href='#gallery'><p>Fotos</p></a>
            <a href='#reviews'><p>Depoimentos</p></a>
            <a href='#contact'><p>Contatos</p></a>
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
                    <a href='https://www.instagram.com' target='_blank'><FaInstagram size={size + 5} /></a>
                </div>
                <div className='bc__navbar-icons_facebook'>
                    <a href='https://www.facebook.com' target='_blank'><FaFacebook size={size} /></a>
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
                                <a href='https://www.instagram.com' target='_blank'><FaInstagram size={size + 5} /></a>
                                <a href='https://www.facebook.com' target='_blank'><FaFacebook size={size} /></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Navbar
