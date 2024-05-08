import React from 'react'
import style from './ButtonA.module.css'


const ButtonA = ({ text, click, }) => {
    return (
        <div>
            <button onClick={click} className={style.ButtonA}>{text}</button>
        </div >
    )
}

export default ButtonA
