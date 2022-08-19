import React from 'react';
import s from './Header.module.css';
import picture from '../../assets/images/symbol-of-peace-vector.jpg';
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
    logout: any
}

const Header = (props: HeaderPropsType): JSX.Element => {
    return (
        <header className={s.header}>
            <img src={picture}/>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/Login'} className={s.btnLogin}>Login</NavLink>}
            </div>
        </header>
    );
};
export default Header;