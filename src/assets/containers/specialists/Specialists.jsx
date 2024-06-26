import React, { useState } from 'react'
import './specialists.css'

const Specialists = () => {

    const [selectOpt, setSelectOpt] = useState(1)

    const Menu = () => (
        <>
            {/* Opt1 */}
            <p onClick={() => setSelectOpt(1)} className={selectOpt === 1 && ("text__highlight")}>Coquetelaria Clássica</p>
            {/* Opt2 */}
            <p onClick={() => setSelectOpt(2)} className={selectOpt === 2 && ("text__highlight")}>Mixologia Molecular</p>
            {/* Opt3 */}
            <p onClick={() => setSelectOpt(3)} className={selectOpt === 3 && ("text__highlight")}>Bar de Whisky</p>
            {/* Opt4 */}
            <p onClick={() => setSelectOpt(4)} className={selectOpt === 4 && ("text__highlight")}>Coquetéis Sem Álcool</p>
            {/* Opt5 */}
            <p onClick={() => setSelectOpt(5)} className={selectOpt === 5 && ("text__highlight")}>Personalização de Coquetéis</p>
        </>
    )

    return (
        <div className='bc__specialists section__padding'>
            <div className="bc__specialists-heading">
                <h1>Especialistas</h1>
            </div>
            <div className="bc__specialists-container">
                <div className='bc__specialists-links'>
                    <Menu />

                </div>
            </div>

        </div>
    )
}

export default Specialists
