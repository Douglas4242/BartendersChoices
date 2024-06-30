import React from 'react'
import './reviewcard.css'

const ReviewCard = ({ photo, name, review }) => {
    return (
        <div className='bc__reviewcard'>
            <div className="bc__reviewcard-image">
                <img src={photo} />
            </div>
            <div className="bc__reviewcard-text">
                <h3>{name}</h3>
                <p>{review}</p>
            </div>
        </div>
    )
}

export default ReviewCard
