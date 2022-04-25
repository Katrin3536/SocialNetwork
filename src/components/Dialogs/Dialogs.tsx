import React, {ChangeEvent} from 'react';
import {DialogPageType} from '../../redux/dialog-reducer';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


type DialogsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void,
    dialogPage: DialogPageType
}

const Dialogs = (props: DialogsType): JSX.Element => {

    let dialogsItemElements: JSX.Element[] = props.dialogPage.dialogs.map(dialog => <DialogsItem key={dialog.id}
                                                                                                 name={dialog.name}
                                                                                                 id={dialog.id}
                                                                                                 ava={dialog.ava}/>);
    let messageItemElement: JSX.Element[] = props.dialogPage.messages.map(message => <Message key={message.id}
                                                                                              message={message.message}/>);

    let newMessageBody: string = props.dialogPage.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    };
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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