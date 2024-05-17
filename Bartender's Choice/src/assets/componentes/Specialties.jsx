import React, { useState } from 'react'
import style from './Specialties.module.css'
import Card from '../elements/Card'
import ButtonA from '../elements/ButtonA'
import SpeCard from '../elements/SpeCard'

const Specialties = () => {

    const [expert, setExpert] = useState('expertsCoquetelaria')

    const expertsCoquetelaria = [
        {
            name: "Maria Oliveira",
            photo: "https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg",
            email: "maria@email.com.br",
            number: "(11)91234-5678",
            text: "Especialista em coquetéis clássicos, com 10 anos de experiência em bares renomados. Apaixonada por coquetelaria histórica e tradicional, Maria tem um vasto conhecimento sobre os clássicos da coquetelaria e sabe como prepará-los com perfeição para qualquer ocasião. Maria gosta de criar novas experiências para os clientes, incorporando sua paixão pela história dos coquetéis em cada drink que prepara."
        },
        {
            name: "Pedro Santos",
            photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            email: "pedrosantos@emmail.com",
            number: "(11)91234-5678",
            text: "Bartender premiado, reconhecido por sua habilidade em preparar coquetéis clássicos de forma criativa e inovadora. Com 8 anos de experiência, Pedro é conhecido por sua técnica impecável e sua paixão por reviver os coquetéis icônicos do passado. Ele tem um talento especial para personalizar os clássicos de acordo com as preferências individuais dos clientes, criando experiências únicas em cada drink"
        },
        {
            name: "Carla Mendes",
            photo: "https://media.istockphoto.com/id/1326417865/es/foto/retrato-de-una-joven-feliz.jpg?s=612x612&w=0&k=20&c=FxufwepLJCHfnsvAK2ijfwBqwhADECfuydZKTHdyAak=",
            email: "carlam@emmail.com",
            number: "(11)91234-5678",
            text: "Com 15 anos de experiência, Carla é uma verdadeira especialista em coquetelaria clássica. Ela tem um profundo conhecimento sobre os ingredientes e técnicas necessários para preparar coquetéis autênticos e memoráveis. Carla é conhecida por sua atenção aos detalhes e sua capacidade de surpreender os clientes com sabores e aromas excepcionais em cada drink."
        },
        {
            name: "Lucas Almeida",
            photo: "https://t4.ftcdn.net/jpg/04/70/16/05/360_F_470160573_2WEoo1TnS6so7zSjAAIKtjDIRTfY1kno.jpg",
            email: "lameida@emmail.com",
            number: "(11)91234-5678",
            text: "Bartender apaixonado pela história por trás de cada coquetel clássico, Lucas tem 7 anos de experiência em bares de prestígio. Ele se dedica a aprimorar suas habilidades constantemente, buscando sempre aperfeiçoar suas técnicas e descobrir novas receitas. Lucas é conhecido por sua personalidade cativante e sua capacidade de contar histórias fascinantes sobre a origem de cada coquetel que prepara."
        },
        {
            name: "Ana Santos",
            photo: "https://st2.depositphotos.com/3258807/7705/i/450/depositphotos_77056001-stock-photo-female-bartender-at-work.jpg",
            email: "anasts@emmail.com",
            number: "(11)91234-5678",
            text: "Especialista em coquetelaria clássica com um toque contemporâneo, Ana combina sua paixão pela tradição com uma abordagem inovadora na preparação de coquetéis. Com 9 anos de experiência, ela é reconhecida por sua criatividade e habilidade em reinventar os clássicos de forma única e surpreendente. Ana adora experimentar novos ingredientes e técnicas para criar coquetéis que encantam os clientes e os transportam para outras épocas."
        }
    ]


    const [selected, setSelected] = useState(1)

    function Coquetelaria() {
        setSelected(1)
    }

    function Mixologia() {
        setSelected(2)
    }

    function Whisky() {
        setSelected(3)
    }

    function SAlcool() {
        setSelected(4)
    }

    function Personalizado() {
        setSelected(5)
    }

    return (
        <div>
            < div id='Specialties' className={style.Specialties} >
                <div>
                    {/* Coquetelaria Clássica */}
                    <Card text="Coquetelaria Clássica" bg="https://universoretro.com.br/wp-content/uploads/2015/07/coquetel.jpg" type={Coquetelaria} />
                    {/* Mixologia Molecular */}
                    <Card text="Mixologia Molecular" bg="https://queroserbartender.com.br/wp-content/uploads/2023/04/Foto-site-5.png" type={Mixologia} />
                    {/* Bar de Whisky */}
                    <Card text="Bar de Whisky" bg="https://static.wixstatic.com/media/4beee1_de3c4956aedd4938827eaea89f5de2c2~mv2.jpg/v1/fit/w_852,h_568,q_90/4beee1_de3c4956aedd4938827eaea89f5de2c2~mv2.jpg" type={Whisky} />
                    {/* Coquetéis Sem Álcool */}
                    <Card text="Coquetéis Sem Álcool" bg="https://www.mncenter.com.br/media/wysiwyg/sex-on-the-beach-soubh.jpg" type={SAlcool} />
                    {/* Personalização de Coquetéis */}
                    <Card text="Personalização de Coquetéis" bg="https://api.baraberto.com.br/wp-content/uploads/2023/07/bartender-fazendo-tailormade.png" type={Personalizado} />
                </div>
                <div className={style.SpecialtiesDescription}>
                    {selected === 1 ? (
                        <div>
                            <h2>Coquetelaria Clássica</h2>
                            <p>Esta especialidade foca em coquetéis tradicionais e populares, como Martini, Mojito, Margarita, entre outros. Os bartenders especializados nessa área são experientes em preparar e servir coquetéis clássicos com perfeição.</p>
                        </div>
                    ) : (selected === 2 ? (
                        <div>
                            <h2>Mixologia Molecular</h2>
                            <p>Bartenders especializados em mixologia molecular utilizam técnicas inovadoras e ingredientes incomuns para criar coquetéis únicos e surpreendentes. Isso pode incluir o uso de espumas, gelatinas, esferificações, entre outras técnicas</p>
                        </div>
                    ) : (selected === 3 ? (
                        <div>
                            <h2>Bar de Whisky</h2>
                            <p>Bartenders especializados em shots são mestres em preparar pequenas doses de coquetéis intensos e saborosos, perfeitos para festas e eventos descontraídos. Eles podem oferecer uma variedade de shots criativos e divertidos para os clientes experimentarem.</p>
                        </div>
                    ) : (selected === 4 ? (
                        <div>
                            <h2>Coquetéis Sem Álcool</h2>
                            <p>Esta especialidade atende a clientes que não consomem álcool, oferecendo uma variedade de coquetéis sem álcool deliciosos e refrescantes. Os bartenders podem criar combinações de sucos, refrigerantes, xaropes e ingredientes aromáticos para proporcionar uma experiência de bebida memorável.</p>
                        </div>
                    ) : (
                        <div>
                            <h2>Personalização de Coquetéis</h2>
                            <p>Alguns bartenders se destacam em personalizar coquetéis de acordo com as preferências individuais dos clientes. Eles podem adaptar receitas existentes ou criar coquetéis exclusivos sob medida para cada ocasião e paladar.</p>
                        </div>
                    ))))}
                    <ButtonA text="Conhecer Especialistas" />
                </div>

            </div >
            <div>
                {expertsCoquetelaria.map((expert, index) => (
                    <SpeCard
                        key={index}
                        photo={expert.photo}
                        name={expert.name}
                        number={expert.number}
                        email={expert.email}
                        text={expert.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Specialties
