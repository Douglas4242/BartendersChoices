import React from 'react'
import style from './Reviews.module.css'
import ReviewCard from '../elements/ReviewCard'

const Reviews = () => {
    return (
        <div id='Reviews' className={style.Reviews}>
            <h1>Depoimentos</h1>
            <div className={style.ReviewsSub}>
                <ReviewCard photo='https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    name='Luiza Mendonça'
                    text='Eu estava planejando uma festa de aniversário para o meu marido e queria algo especial. A Bartenders Choice foi incrível em nos ajudar a encontrar o bartender perfeito para o nosso evento! O bartender que contratamos não só preparou coquetéis deliciosos, mas também trouxe uma vibe incrível para a festa. Foi uma noite que todos nós lembraremos para sempre. ' />
                <ReviewCard photo='https://static.vecteezy.com/system/resources/thumbnails/041/151/800/small_2x/ai-generated-portrait-of-a-young-handsome-italian-man-in-a-black-suit-standing-in-an-arched-corridor-and-looking-at-camera-photo.jpg'
                    name='Pedro Oliveira'
                    text='Estávamos organizando um evento corporativo para nossa empresa e queríamos garantir que nossos convidados tivessem uma experiência única. A Bartenders Choice nos ajudou a encontrar o bartender ideal para o nosso evento. Ele não só preparou coquetéis incríveis, mas também cativou a todos com sua habilidade e profissionalismo. Definitivamente vamos usar os serviços da Bartenders Choice novamente no futuro! ' />
                <ReviewCard photo='https://img.freepik.com/fotos-gratis/mulher-jovem-e-bonita-em-sueter-rosa-quente-aparencia-natural-sorridente-retrato-ligado-isolado-cabelo-comprido_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.1314780943.1710201600&semt=ais'
                    name='Mariana Costa'
                    text='Eu queria surpreender meus amigos com uma festa temática em casa, e a Bartenders Choice foi fundamental para tornar isso possível. Eles me conectaram com um bartender que não só criou coquetéis incríveis, mas também ajudou a definir o clima da festa. Foi uma noite cheia de risadas, boa música e, é claro, coquetéis deliciosos. Mal posso esperar para organizar ' />
                <ReviewCard photo='https://www.shutterstock.com/image-photo/portrait-young-handsome-man-smiling-600nw-213159280.jpg'
                    name='Gabriel Silva'
                    text='Trabalhar com a Bartenders Choice foi uma experiência incrível do início ao fim. Eles foram muito profissionais e prestativos durante todo o processo de cadastramento, e me conectaram com várias oportunidades de trabalho que se encaixavam perfeitamente no meu perfil. Graças à Bartenders Choice, pude expandir minha rede de clientes e aumentar minha visibilidade no mercado. Mal posso esperar para trabalhar com eles novamente no futuro! ' />

            </div>

        </div>
    )
}

export default Reviews
