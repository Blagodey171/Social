import React from 'react';
import style from './header.css'


const header = () => {
    return (
        <header>
            <div className="headerLogo">
                <img src="#" alt="#"/>
            </div>
            <div className="headerSearch">
                <input type="text" className="headerSearchInput"/>
                <button className="headerSearchButton">Search</button>
            </div>
        </header>
   )
}

export default header;