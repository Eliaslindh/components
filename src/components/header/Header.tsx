import React from 'react'
import style from '../../styles/Home.module.css'
import Logo from '@/components/Logo/Logo'
import Navbar from '../navbar/Navbar'


const Header = () => {
    return (
        <div className={style.wrapper}>

            <Logo></Logo>
            <Navbar></Navbar>
        </div>
    )
}

export default Header