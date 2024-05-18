import React, { useState } from 'react';
import style from './Introduction.module.css';
import ButtonA from '../elements/ButtonA';

const Introduction = () => {
    const [show, setShow] = useState(false);

    function showOn() {
        setShow(!show);
    }

    return (
        <div id='Introduction' className={style.Introduction}>
            <div className={style.IntroductionSub}>
                <h1>Bem-vindo à Bartender's Choice</h1>
                <h2>O Destino dos Melhores Coquetéis</h2>
                <ButtonA text={show ? "OCULTAR" : "MOSTRAR MAIS"} click={showOn} />

                <div className={`${style.IntroductionExpand} ${show ? style.show : ''}`}>
                    <p>Na Bartender's Choice, somos mais do que apenas um serviço de busca por bartenders - somos uma comunidade apaixonada pela arte da mixologia, criada com um propósito: unir os amantes de coquetéis aos bartenders mais talentosos e criativos do mercado. <br />

                        Nossa jornada começou com uma simples ideia: transformar a maneira como as pessoas experimentam coquetéis. Cansados das opções comuns e repetitivas encontradas nos menus dos bares, nos propusemos a criar um espaço onde a inovação, a criatividade e a personalização reinam supremas. Assim nasceu a Bartender's Choice. <br />

                        Desde o nosso início modesto até nos tornarmos uma plataforma líder no mercado de serviços de bartender, mantivemos firmemente nossa visão de proporcionar experiências únicas e memoráveis a cada cliente que cruza nosso caminho. Ao longo do tempo, construímos uma comunidade vibrante de bartenders talentosos e clientes ávidos por descobrir novos sabores e experiências.<br />

                        O que nos diferencia é o nosso compromisso com a excelência. Cada bartender cadastrado na Bartender's Choice é cuidadosamente selecionado e avaliado com base em sua experiência, habilidades e paixão pela arte da mixologia. Esteja você procurando por coquetéis clássicos, experimentais, sem álcool ou personalizados, temos o bartender perfeito para atender às suas necessidades e superar suas expectativas.<br />

                        Na Bartender's Choice, acreditamos que cada coquetel conta uma história, e estamos aqui para ajudá-lo a criar memórias inesquecíveis em cada gole. Junte-se a nós nesta jornada de descoberta e celebração dos melhores coquetéis que o mundo tem a oferecer.<br />

                        Seja bem-vindo à Bartender's Choice - onde os melhores coquetéis se tornam realidade.
                    </p>
                    <img src='https://www.barschool.net/sites/default/files/images/node/article/111-bartender-preparing-cocktail.jpg' />
                </div>
            </div>
        </div>
    );
};

export default Introduction;
