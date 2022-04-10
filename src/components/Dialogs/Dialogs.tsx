import React, {ChangeEvent} from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialog-reducer';
import {ActionType,DialogPageType} from '../../redux/state';



import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


type DialogsType = {
    state: DialogPageType,
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsType): JSX.Element => {

    let dialogsItemElements: JSX.Element[] = props.state.dialogs.map(dialog => <DialogsItem key={dialog.id}
                                                                                            name={dialog.name}
                                                                                            id={dialog.id}
                                                                                            ava={dialog.ava}/>);
    let messageItemElement: JSX.Element[] = props.state.messages.map(message => <Message key={message.id}
                                                                                         message={message.message}/>);

    let newMessageBody: string = props.state.newMessageBody;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    };
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsItemElements}
            </div>
            <div className={s.messages}>
                <div>{messageItemElement}</div>
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder="Enter your message"
                        >
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;