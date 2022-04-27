import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import s from './Navbar.module.css';
import {mapStateToPropsType} from './NavbarContainer';

const Navbar = (props: mapStateToPropsType): JSX.Element => {

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Profile" activeClassName= {s.active}>Profile</NavLink>
                {/*<a href=""></a> заменили на navlink to=*/}
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName= {s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName= {s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName= {s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" activeClassName= {s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Users" activeClassName= {s.active}>Find users</NavLink>
            </div>

            <Friends stateFriend= {props.siteBar}/>
        </nav>
    );
};

export default Navbar;