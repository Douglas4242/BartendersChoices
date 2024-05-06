import React from 'react'
import style from './Card.module.css'

const Card = ({ text, bg }) => {
    return (
        <div className={style.Card} style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            width: '100%',
        }}>
            <h1>{text}</h1>

        </div >
    )
}

export default Card
