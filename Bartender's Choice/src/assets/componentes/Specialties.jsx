import React from 'react'
import style from './Specialties.module.css'
import Card from '../elements/Card'

const Specialties = () => {
    return (
        <div>
            {/* Coquetelaria Clássica */}
            <Card text="Coquetelaria Clássica" bg="https://universoretro.com.br/wp-content/uploads/2015/07/coquetel.jpg" />
            {/* Mixologia Molecular */}
            <Card text="Mixologia Molecular" bg="https://queroserbartender.com.br/wp-content/uploads/2023/04/Foto-site-5.png" />
            {/* Bar de Whisky */}
            <Card text="Bar de Whisky" bg="https://static.wixstatic.com/media/4beee1_de3c4956aedd4938827eaea89f5de2c2~mv2.jpg/v1/fit/w_852,h_568,q_90/4beee1_de3c4956aedd4938827eaea89f5de2c2~mv2.jpg" />
            {/* Coquetéis Sem Álcool */}
            <Card text="Coquetéis Sem Álcool" bg="https://www.mncenter.com.br/media/wysiwyg/sex-on-the-beach-soubh.jpg" />
            {/* Personalização de Coquetéis */}
            <Card text="Personalização de Coquetéis" bg="https://api.baraberto.com.br/wp-content/uploads/2023/07/bartender-fazendo-tailormade.png" />


        </div>
    )
}

export default Specialties
