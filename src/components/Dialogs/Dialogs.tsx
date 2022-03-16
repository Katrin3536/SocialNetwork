import React from 'react';
import {NavLink} from 'react-router-dom';
import {DialogPageType, DialogsDataType, MessageDataType, StateType} from '../../redux/state';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


// let DialogsItemElements = [<DialogsItem name={dialogs[0].name} id={dialogs[0].id}/>,
//     <DialogsItem name={dialogs[1].name} id={dialogs[1].id}/>,
// <DialogsItem name={dialogs[2].name} id={dialogs[2].id}/>,
// <DialogsItem name={dialogs[3].name} id={dialogs[3].id}/>,
// <DialogsItem name={dialogs[4].name} id={dialogs[4].id}/>,
// <DialogsItem name={dialogs[5].name} id={dialogs[5].id}/>]

type DialogsType = {
    state: DialogPageType
}

const Dialogs = (props:DialogsType): JSX.Element => {

    let dialogsItemElements: JSX.Element[] = props.state.dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} ava={dialog.ava}/>);
    let messageItemElement: JSX.Element[] = props.state.messages.map(message => <Message key={message.id} message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsItemElements}
                {/*<DialogsItem name={dialogs[0].name} id={dialogs[0].id}/>*/}
                {/*<DialogsItem name={dialogs[1].name} id={dialogs[1].id}/>*/}
                {/*<DialogsItem name={dialogs[2].name} id={dialogs[2].id}/>*/}
                {/*<DialogsItem name={dialogs[3].name} id={dialogs[3].id}/>*/}
                {/*<DialogsItem name={dialogs[4].name} id={dialogs[4].id}/>*/}
                {/*<DialogsItem name={dialogs[5].name} id={dialogs[5].id}/>*/}
            </div>
            <div className={s.messages}>
                {messageItemElement}
                {/*<Message message={messages[0].message}/>*/}
                {/*<Message message={messages[1].message}/>*/}
                {/*<Message message={messages[2].message}/>*/}
            </div>
        </div>
    );
};

export default Dialogs;