import React from 'react';
import s from './navbar.module.css';

const propsNavbar = [
    {
        to: '/quest',
        nameLink: 'Квесты',
        style: s.style
    },
    {
        to: '/skills',
        nameLink: 'Умения и классы',
        style: s.style
    },
    {
        to: '/npc',
        nameLink: 'NPC и монстры',
        style: s.style
    },
    {
        to: '/location',
        nameLink: 'Локации',
        style: s.style
    },
    {
        to: '/clan',
        nameLink: 'Клан и Альянс',
        style: s.style
    },
    {
        to: '/imp',
        nameLink: 'Улучшения',
        style: s.style
    },
    {
        to: '/hero',
        nameLink: 'Герои, Олимпиада, Сабкласс',
        style: s.style
    },
    {
        to: '/item',
        nameLink: 'Предметы',
        style: s.style
    },
    {
        to: '/pets',
        nameLink: 'Питомцы, Сумоны',
        style: s.style
    },
    {
        to: '/pvp',
        nameLink: 'PvP и Осады',
        style: s.style
    },
    {
        to: '/craft',
        nameLink: 'Крафт',
        style: s.style
    },
    {
        to: '/public',
        nameLink: 'Общение',
        style: s.style
    },
    {
        to: '/servers',
        nameLink: 'Проверенные сервера',
        style: s.style
    }
]

export default propsNavbar;