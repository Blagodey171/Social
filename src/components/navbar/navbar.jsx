import React from 'react';
import s from './navbar.module.css';
import Navlink from './navlink/navlink'


const navbar = (props) => {
    return (
        <div className={s.navigation}>
            <ul className={s.ul}>
                    <Navlink name='Quest' />
                    <Navlink name='Skills' />
                    <Navlink name='Upgrade' />
                    <Navlink name='Pets' />
                    <Navlink name='Loc' />
                    <Navlink name='Clan' />
                    <Navlink name='Pvp' />
                    <Navlink name='Hero' />
                    <Navlink name='Npc' />
                    <Navlink name='Item' />
            </ul>
        </div>
    )
}

export default navbar;