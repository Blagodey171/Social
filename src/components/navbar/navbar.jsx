import React from 'react';
import s from './navbar.module.css';
import { NavLink } from 'react-router-dom'

import Navlink from './navlink/navlink'
import propsNavbar from './arr_props.jsx'



let linkProps = propsNavbar.map( el => <Navlink to={el.to} nameLink={el.nameLink} activeClassName={el.style}/>) ;



const navbar = (props) => {
    return (
        <div className={s.navigation}>
            <ul className={s.ul}>
                {linkProps}
            </ul>
        </div>
    )
}

export default navbar;