import React from 'react';
import s from './Dialogs.module.css';
import {DialogsType} from './DialogsContainer';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {AddMessageFormRedux, FormDataType} from './AddMessageForm/AddMessageForm';


const Dialogs = React.memo((props: DialogsType): JSX.Element => {

    let dialogsItemElements: JSX.Element[] = props.dialogPage.dialogs.map(dialog => <DialogsItem key={dialog.id}
                                                                                                 name={dialog.name}
                                                                                                 id={dialog.id}
                                                                                                 ava={dialog.ava}/>);
    let messageItemElement: JSX.Element[] = props.dialogPage.messages.map(message => <Message key={message.id}
                                                                                              message={message.message}/>);
    const addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsItemElements}
            </div>
            <div className={s.messages}>
                <div>{messageItemElement}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
});


export default Dialogs;

