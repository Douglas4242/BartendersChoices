import React from 'react'
import style from './ButtonA.module.css'
import Collapse from 'react-bootstrap/Collapse'

const ButtonA = ({ text, click }) => {
    return (
        <div>
            <button onClick={click} className={style.ButtonA}>{text}</button>
        </div>
    )
}

export default ButtonA
