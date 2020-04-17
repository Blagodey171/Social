import React from 'react';
import s from './navbar.module.css';
import {NavLink} from 'react-router-dom'

const navbar = (props) => {
    return (
        <div className={s.navigation}>
            <ul className={s.ul}>
                <NavLink to="/quest" activeClassName={s.active}>Quest</NavLink>
                <NavLink to="/skills" activeClassName={s.active}>Skills</NavLink>
            </ul>
        </div>
    )
}

export default navbar;