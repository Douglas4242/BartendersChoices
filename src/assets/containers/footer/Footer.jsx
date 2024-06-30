import React from 'react'
import './footer.css'
import Logo from '../../images/Logo.svg'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";


const Footer = () => {

    const size = 30

    return (
        <div className='bc__footer section__padding'>
            <div className="bc__footer-logo">
                <img src={Logo} />
            </div>
            <div id='contact' className='bc__footer-container'>
                <div className="bc__footer-container-left">
                    <h3>Trabalhe com a gente!</h3>
                    <p>Entre em contato pelos seguintes canais</p>
                    <p><FaEnvelope /> contato@bartenderschoice.com</p>
                    <p><FaPhoneAlt /> (12) 3653-5353</p>
                    <p><FaWhatsapp /> (12) 99292=9292</p>
                </div>
                <div className="bc__footer-container-right">
                    <p>Rua das Pamonhas, s/n - Jardim Amália</p>
                    <p>Cidade do Futuro</p>
                    <p>00.737.035/0001-08</p>
                    <div className="bc__footer-container-right_icons">
                        <p><a href='https://www.instagram.com' color='#fff' target='_blank'><FaInstagram size={size + 5} /></a></p>
                        <p><a href='https://www.facebook.com' color='#fff' target='_blank'><FaFacebook size={size} /></a></p>
                    </div>
                </div>
            </div>
            <div className="bc__footer-bottom">
                <p>Copyright © 2024 Bartender's Choice, TODOS OS DIREITOS RESERVADOS, 2024.</p>
                <p>Criado por Douglas Moraes</p>
            </div>

        </div>
    )
}

export default Footer
