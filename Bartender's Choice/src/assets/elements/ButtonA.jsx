import React from 'react'
import style from './ButtonA.module.css'


const ButtonA = ({ text, click, type }) => {
    return (
        <div>
            <button type={type} onClick={click} className={style.ButtonA}>{text}</button>
        </div >
    )
}

export default ButtonA
