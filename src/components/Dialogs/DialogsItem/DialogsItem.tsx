import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsItemType = {
    name: string,
    id: number,
    ava: string
}

const DialogsItem = (props: DialogsItemType): JSX.Element => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.ava}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>);
};


export default DialogsItem;