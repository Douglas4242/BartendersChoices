import React from 'react'
import style from './ButtonA.module.css'

const ButtonA = ({ text }) => {
    return (
        <div>
            <button className={style.ButtonA}>{text}</button>
        </div>
    )
}

export default ButtonA
