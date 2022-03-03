import React from 'react';
import s from "./Header.module.css";

const Header = ():JSX.Element => {
    return (
        <header className={s.header}>
            <img src= "https://st2.depositphotos.com/1341440/7061/v/600/depositphotos_70611687-stock-illustration-dove-symbol-of-peace-vector.jpg"/>
        </header>
    );
};

export default Header;