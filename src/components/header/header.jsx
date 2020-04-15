import React from 'react';
import s from './header.module.css'
import logo from "./logo.png"
import Search from './searchAndAnimation/search'

const header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img src={logo} alt="#" className={s.logo}/>
            </div>
            <Search />
        </header>
   )
}

export default header;