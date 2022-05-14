import React from 'react';
import s from './Header.module.css';
import picture from '../../assets/images/symbol-of-peace-vector.jpg';
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
}

const Header = (props: HeaderPropsType): JSX.Element => {
    return (
        <header className={s.header}>
            <img src={picture}/>
            <div className={s.loginBlock}>
                { props.isAuth? props.login:
                <NavLink to={'/Login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};
export default Header;