import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialog-reducer';
import {Store} from 'redux';
import {ReducerType} from '../../redux/redux-store';
import Dialogs from './Dialogs';


type DialogsContainerType = {
    store: Store<ReducerType>
}

const DialogsContainer = (props: DialogsContainerType): JSX.Element => {

    let state = props.store.getState().dialogPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    };
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    };

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogPage={state}/>
    );
};

export default DialogsContainer;