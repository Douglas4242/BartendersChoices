import React from 'react'
import style from './SignUp.module.css'
import ButtonA from '../elements/ButtonA'

const SignUp = () => {
    return (
        <div id='SignUp' className={style.SignUp}>
            <div>
                <h2>Inscreva-se para trabalhar conosco!</h2>
            </div>
            <div className={style.SignUpForms}>
                <form>
                    <label>Digite seu Nome</label> <br />
                    <input id='name' type='text'></input> <br />
                    <label>Digite seu email</label> <br />
                    <input id='email' type='email'></input><br />
                    <label>Informe seu telefone</label> <br />
                    <input id='phone' type='number'></input> <br />
                    <ButtonA text='Enviar' type='submit' />
                </form>
                <form>
                    <label>Conte-nos suas experiências!</label>
                    <textarea class="longInput" cols="20" rows="10"></textarea>
                </form>
            </div>
        </div>
    )
}


export default SignUp
