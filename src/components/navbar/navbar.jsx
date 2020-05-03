import React from 'react';
import s from './navbar.module.css';


import Navlink from './navlink/navlink'

const navbar = (props) => {
    let linkProps = props.navbar.map( el => <Navlink to={el.to} nameLink={el.nameLink} activeClassName={s.active}/>) ;
    
    return (
        <div className={s.navigation}>
            <ul className={s.ul}>
                {linkProps}
            </ul>
        </div>
    )
}

export default navbar;