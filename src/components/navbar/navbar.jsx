import React from 'react';
import s from './navbar.module.css';
import {NavLink} from 'react-router-dom'
import Navlink from './navlink/navlink'

const navbar = (props) => {
    return (
        <div className={s.navigation}>
            <ul className={s.ul}>
                <Navlink to='/quest' nameLink='Квесты' activeClassName={s.active} />
                <Navlink to='/skills' nameLink='Умения и классы' activeClassName={s.active} />
                <Navlink to='/npc' nameLink='NPC и монстры' activeClassName={s.active} />
                <Navlink to='/location' nameLink='Локации' activeClassName={s.active} />
                <Navlink to='/clan' nameLink='Клан и Альянс' activeClassName={s.active} />
                <Navlink to='/imp' nameLink='Улучшения' activeClassName={s.active} />
                <Navlink to='/hero' nameLink='Герои, Олимпиада, Сабкласс' activeClassName={s.active} />
                <Navlink to='/item' nameLink='Предметы' activeClassName={s.active} />
                <Navlink to='/pets' nameLink='Питомцы, Сумоны' activeClassName={s.active} />
                <Navlink to='/pvp' nameLink='PvP и Осады' activeClassName={s.active} />
                <Navlink to='/transform' nameLink='Трансформации' activeClassName={s.active} />
            </ul>
        </div>
    )
}

export default navbar;