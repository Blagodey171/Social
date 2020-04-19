import React from 'react';
import {NavLink} from 'react-router-dom';


const navlink = (props) => {
    return (
        <NavLink to={props.to} activeClassName={props.activeClassName} >{props.nameLink}</NavLink>
    )
}

export default navlink;