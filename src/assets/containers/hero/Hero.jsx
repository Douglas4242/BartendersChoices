import React, { useState } from 'react'
import './hero.css'

const Hero = () => {

    const Text = () => (<p>   Na <span className='text__highlight'>Bartender's Choice</span>, somos mais do que apenas um serviço de busca por bartenders - somos uma comunidade apaixonada pela arte da mixologia, criada com um propósito: unir os amantes de coquetéis aos bartenders mais talentosos e criativos do mercado. <br />
        Nossa jornada começou com uma simples ideia: transformar a maneira como as pessoas experimentam coquetéis. Cansados das opções comuns e repetitivas encontradas nos menus dos bares, nos propusemos a criar um espaço onde a inovação, a criatividade e a personalização reinam supremas. Assim nasceu a Bartender's Choice. <br />
        Desde o nosso início modesto até nos tornarmos uma plataforma líder no mercado de serviços de bartender, mantivemos firmemente nossa visão de proporcionar experiências únicas e memoráveis a cada cliente que cruza nosso caminho. Ao longo do tempo, construímos uma comunidade vibrante de bartenders talentosos e clientes ávidos por descobrir novos sabores e experiências. <br />
        O que nos diferencia é o nosso compromisso com a excelência. Cada bartender cadastrado na <span className='text__highlight'>Bartender's Choice</span> é cuidadosamente selecionado e avaliado com base em sua experiência, habilidades e paixão pela arte da mixologia. Esteja você procurando por coquetéis clássicos, experimentais, sem álcool ou personalizados, temos o bartender perfeito para atender às suas necessidades e superar suas expectativas. <br />
        Na <span className='text__highlight'>Bartender's Choice</span>, acreditamos que cada coquetel conta uma história, e estamos aqui para ajudá-lo a criar memórias inesquecíveis em cada gole. Junte-se a nós nesta jornada de descoberta e celebração dos melhores coquetéis que o mundo tem a oferecer.
        Seja bem-vindo à <span className='text__highlight'>Bartender's Choice</span> - onde os melhores coquetéis se tornam realidade.</p>)

    const [showModal, setShowModal] = useState(false)

    return (
        <div className='section__padding bc__hero'>
            <div className="bc__hero-heading">
                <h1>Bem vindo a <span className='text__highlight'>Bartender's Choice</span></h1>
                <h2>O Destino dos Melhores Coquetéis</h2>
            </div>
            <div className='bc__hero-modal'>
                <button onClick={() => setShowModal(true)}>Conheça nossa história!</button>
                {showModal && (
                    <div className='bc__hero-modal_overlay' onClick={() => setShowModal(false)}>
                        <div className='bc__hero-modal_text fade-in' onClick={(e) => e.stopPropagation()}>
                            <p><Text /></p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Hero
