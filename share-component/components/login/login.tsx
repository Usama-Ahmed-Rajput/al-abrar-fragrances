import React from 'react'
import style from './login.module.scss'
const Login = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.logo}>
                        <img src="/al-abrar-logo.png" alt="Al Abrar Fragrances Logo" />
                    </div>

                    <div>
                        <h2 className={style.signin}>Sign in to Al Abrar</h2>
                        <p className={style.description}>Sign in or create an account to explore our fragrances</p>
                    </div>

                    <div className={style.signin_btn}>
                        <button>Sign in with shop</button>
                    </div>

                    <div className={style.line}>
                        <div className={style.divider}></div>
                        <span className={style.or}>or</span>
                        <div className={style.divider}></div>
                    </div>

                    <div className={style.email}>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className={style.cnt_btn}>
                        <button>Continue</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
