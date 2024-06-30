import React from 'react'
import './specialistcard.css'
import { FaEnvelope, FaPhoneAlt, FaCocktail } from "react-icons/fa";


const SpecialistCard = ({ photo, name, age, xp, score, phone, email }) => {

    const ShowScore = () => {
        let scores = [];
        for (let i = 0; i < score; i++) {
            scores.push(<p key={i}><FaCocktail size={size} /></p>);
        }
        return scores;
    }

    const size = 30

    return (
        <div className='bc__specialistcard'>
            <div className='bc__specialistcard-heading'>
                <img src={photo} />
                <div className='bc__specialistcard-heading_info'>
                    <h3>{name}</h3>
                    <p>{age} Anos</p>
                </div>
            </div>
            <div className='bc__specialistcard-text'>
                <h3>Experiências</h3>
                <p>{xp}</p>
            </div>
            <div className='bc__specialistcard-icons'>
                <div className='bc__specialistcard-icons_score'>
                    <ShowScore />
                </div>

                <div className='bc__specialistcard-icons_contact'>
                    <p><FaPhoneAlt size={size} /> {phone}</p>
                    <p><FaEnvelope size={size} /> {email}</p>

                </div>
            </div>
        </div>
    )
}

export default SpecialistCard
