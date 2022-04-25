import React from 'react';

export type PostDataType = {
    id: number,
    message: string,
    likeCount: number,
}

export type ProfilePageType = {
    postData: PostDataType[],
    newPostText: string,
}

export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewTextActionCreator>

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
        postData: [
            {id: 1, message: 'Hi! How are you?', likeCount: 10},
            {id: 2, message: 'My first post', likeCount: 15},
        ],
        newPostText: '',
    };

const ProfileReducer = (state:ProfilePageType = initialState, action:ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0,
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};
export const addPostActionCreator = ()=>{
    return {type: ADD_POST} as const
}

export const updateNewTextActionCreator = (newText:string)=>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText:newText
    } as const
}

export default ProfileReducer;