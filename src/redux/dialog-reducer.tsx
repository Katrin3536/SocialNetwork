import React from 'react';
import {ActionType, DialogPageType} from './state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const DialogReducer = (state: DialogPageType, action: ActionType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 4, message: body});
            return state;
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newBody;
            return state;
        default:
            return state;
    }
};

export const sendMessageActionCreator = ()=>{
    return {
        type: SEND_MESSAGE,
    } as const
}
export const updateNewMessageBodyActionCreator = (newBody:string)=>{
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newBody:newBody,
    } as const
}

export default DialogReducer;