import React from 'react';
import s from './navlink.module.css';

const navLink = (props) => {
    return (
        <li className={s.li}>
            <a className={s.quest} >{props.name}</a>
        </li>
    )
}

export default navLink;