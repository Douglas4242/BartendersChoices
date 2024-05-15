import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div id='Contact' className={style.Footer}>
            <div>
                <p>Rua das Pamonhas, s/n - Jardim Amália <br />
                    Cidade do Futuro</p>
                <p>(15) 1234-5678</p>
                <p>00.737.035/0001-08</p>
            </div>
            <div>
                <p>Copyright © 2024 Bartender's Choice, TODOS OS DIREITOS RESERVADOS. <br />
                    As fotos aqui veiculadas, logotipo, marca e textos são apenas para propósitos demosntrativos <br />
                    sem obtenção de lucro. É vetada a sua reprodução, total ou parcial, <br />
                    sem a expressa autorização do administrador do site.</p>
            </div>

        </div>
    )
}

export default Footer
