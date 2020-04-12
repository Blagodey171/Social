import React from 'react';
import style from './header.module.css'
import logo from "./logo.png"
import Search from './searchAndAnimation/search'

const header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLogo}>
                <img src={logo} alt="#" className={style.logo}/>
            </div>
            <Search />
        </header>
   )
}

export default header;