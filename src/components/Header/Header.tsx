import React from 'react';
import s from "./Header.module.css";
import picture from '../../assets/images/symbol-of-peace-vector.jpg'

const Header = ():JSX.Element => {
    return (
        <header className={s.header}>
            <img src={picture}/>
        </header>
    );
};
export default Header;