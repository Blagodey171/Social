import React from 'react';
import s from './navbar.module.css';
import { NavLink } from 'react-router-dom'
import Navlink from './navlink/navlink'


let styleForLink = s.active;

const contentUrlArr = [
    {
        to: '/quest',
        nameLink: 'Квесты',

    }

]

const navbar = (props) => {
    return (
        <div className={s.navigation}>
            <ul className={s.ul}>
                <Navlink to={contentUrlArr[0].to} nameLink={contentUrlArr[0].nameLink} activeClassName={styleForLink} />
                <Navlink to='/skills' nameLink='Умения и классы' activeClassName={s.active} />
                <Navlink to='/npc' nameLink='NPC и монстры' activeClassName={s.active} />
                <Navlink to='/location' nameLink='Локации' activeClassName={s.active} />
                <Navlink to='/clan' nameLink='Клан и Альянс' activeClassName={s.active} />
                <Navlink to='/imp' nameLink='Улучшения' activeClassName={s.active} />
                <Navlink to='/hero' nameLink='Герои, Олимпиада, Сабкласс' activeClassName={s.active} />
                <Navlink to='/item' nameLink='Предметы' activeClassName={s.active} />
                <Navlink to='/pets' nameLink='Питомцы, Сумоны' activeClassName={s.active} />
                <Navlink to='/pvp' nameLink='PvP и Осады' activeClassName={s.active} />
                <Navlink to='/craft' nameLink='Крафт' activeClassName={s.active} />
                <Navlink to='/public' nameLink='Общение' activeClassName={s.active} />
                <Navlink to='/servers' nameLink='Проверенные сервера' activeClassName={s.active} />
                
            </ul>
        </div>
    )
}

export default navbar;