import React from 'react';
import style from './header.module.css'
import logo from "./logo.png"

const header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLogo}>
                <img src={logo} alt="#" className={style.logo}/>
            </div>
            <div className={style.headerSearch}>
                <input type="text" className={style.headerSearchInput}/>
                <button className={style.headerSearchButton}>Search</button>
            </div>
        </header>
   )
}

export default header;