import React from 'react';
import boy from '../assets/images/boyImage.png'
import girl from '../assets/images/girlImage.jpg'

export type MessageDataType = {
    id: number,
    message: string
}

export type DialogsDataType = {
    id: number,
    name: string,
    ava: string
}

export type DialogPageType = {
    dialogs: DialogsDataType[],
    messages: MessageDataType[],
}

export type DialogActionType = ReturnType<typeof sendMessageActionCreator>

const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Masha',
            ava: girl
        },
        {
            id: 2,
            name: 'Yulia',
            ava: girl
        },
        {
            id: 3,
            name: 'Katya',
            ava: girl
        },
        {
            id: 4,
            name: 'Andrew',
            ava: boy
        },
        {
            id: 5,
            name: 'Pavel',
            ava: boy
        },
        {
            id: 6,
            name: 'Sergey',
            ava: boy
        },
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Are you ok?'},
    ],
};

const DialogReducer = (state: DialogPageType = initialState, action: DialogActionType): DialogPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessageBody:string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const;
};

export default DialogReducer;