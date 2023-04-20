import React from 'react'
import style from '../../styles/Home.module.css'


const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.icons}>
                <img className={style.iconimg} src="/tiktok.png" alt="" />
                <img className={style.iconimg} src="/ig.jpeg" alt="" />
                <img className={style.iconimg} src="/snap.png" alt="" />
            </div>
            <div className={style.copyright}>
                <h1>Copy right to elias lindh</h1>
            </div>
        </div>
    )
}

export default Footer