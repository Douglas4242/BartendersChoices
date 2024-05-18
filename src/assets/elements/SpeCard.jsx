import React from 'react'
import style from './SpeCard.module.css'

const SpeCard = ({ photo, name, email, number, text }) => {
    return (
        <div className={style.SpeCard}>
            <div className={style.SpeCardImg}>
                <img src={photo} />
            </div>
            <div className={style.SpeCardInfo}>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{number}</p>
            </div>
            <div className={style.SpeCardXp}>
                <h1>Me conheça melhor!</h1>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default SpeCard
