import React from 'react';
import s from './search.module.css'

const search = () => {
    return (
        <div className={s.container}>
            <div className={s.headerAnimation}>
                <h1>Profession,skills</h1>
            </div>
            <div className={s.headerSearch}>
                <input type="text" className={s.headerSearchInput}/>
                <button className={s.headerSearchButton}>Search</button>
            </div>
        </div>
    )
}

export default search;