import React from 'react'
import style from './ReviewCard.module.css'

const ReviewCard = ({ photo, name, text }) => {
    return (
        <div className={style.ReviewCard}>
            <div>
                <img src={photo} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ReviewCard
