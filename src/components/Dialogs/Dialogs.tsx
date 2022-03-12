import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

type DialogsItemType = {
    name: string,
    id: string
}

const DialogsItem = (props: DialogsItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>);
};

type MessageProps = {
    message: string
}

const Message = (props:MessageProps) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = (): JSX.Element => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name={'Masha'} id={'1'}/>
                <DialogsItem name={'Veronica'} id={'2'}/>
                <DialogsItem name={'Katya'} id={'3'}/>
                <DialogsItem name={'Andrew'} id={'4'}/>
                <DialogsItem name={'Pavel'} id={'5'}/>
                <DialogsItem name={'Sergey'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Are you ok?'}/>
            </div>
        </div>
    );
};

export default Dialogs;