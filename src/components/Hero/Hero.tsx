import React from 'react'
import style from '../../styles/Home.module.css'

const Hero = () => {
    return (
        <div className={style.Hero}>
            <img className={style.heroimg} src="/pk.jpeg" alt="" />
        </div>
    )
}

export default Hero