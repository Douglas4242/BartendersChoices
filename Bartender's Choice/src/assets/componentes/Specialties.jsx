import React, { useState } from 'react'
import style from './Specialties.module.css'
import Card from '../elements/Card'
import ButtonA from '../elements/ButtonA'
import SpeCard from '../elements/SpeCard'

const Specialties = () => {

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
    )
}

export default Specialties
