import React from 'react'
import './reviewcard.css'

const ReviewCard = () => {
    return (
        <div className='bc__reviewcard'>
            <div className="bc__reviewcard-image">
                <img src='https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg' />
            </div>
            <div className="bc__reviewcard-text">
                <h3>Nome Nome Nome</h3>
                <p>Eu estava planejando uma festa de aniversário para o meu marido e queria algo especial. A Bartenders Choice foi incrível em nos ajudar a encontrar o bartender perfeito para o nosso evento! O bartender que contratamos não só preparou coquetéis deliciosos, mas também trouxe uma vibe incrível para a festa. Foi uma noite que todos nós lembraremos para sempre.</p>
            </div>
        </div>
    )
}

export default ReviewCard
