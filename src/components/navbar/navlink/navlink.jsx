import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './navlink.module.css'


const navlink = (props) => {
    return (
        <div className={s.container}>
            <NavLink to={props.to} activeClassName={props.activeClassName} >{props.nameLink}</NavLink>
            <div className={s.arrowContainer}>
                <span className={s.arrow}></span>
            </div>
        </div>
        
    )
}

export default navlink;