import React from 'react'
import './specialistcard.css'
import { FaEnvelope, FaPhoneAlt, FaCocktail } from "react-icons/fa";


const SpecialistCard = ({ photo, name, age, text, score, phone, email }) => {

    const ShowScore = () => {
        let scores = [];
        for (let i = 0; i < 5; i++) {
            scores.push(<p key={i}><FaCocktail size={size} /></p>);
        }
        return scores;
    }

    const size = 30

    return (
        <div className='bc__specialistcard'>
            <div className='bc__specialistcard-heading'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZ2ZV8f_IBk865E7bEObKgFmfnBsorNTXcA&s" />
                <div className='bc__specialistcard-heading_info'>
                    <h3>Nome nome nome</h3>
                    <p>30 Anos</p>
                </div>
            </div>
            <div className='bc__specialistcard-text'>
                <h3>Experiências</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at in tempore reiciendis pariatur natus maxime, deleniti commodi porro asperiores praesentium voluptatem omnis facilis eligendi eius quaerat possimus ad a!</p>
            </div>
            <div className='bc__specialistcard-icons'>
                <div className='bc__specialistcard-icons_score'>
                    <ShowScore />
                </div>

                <div className='bc__specialistcard-icons_contact'>
                    <p><FaEnvelope size={size} /> (11)99999-9999</p>
                    <p><FaPhoneAlt size={size} /> email@email.com</p>
                </div>
            </div>
        </div>
    )
}

export default SpecialistCard
