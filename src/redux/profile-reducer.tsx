import React from 'react';
import {ActionType, PostDataType, ProfilePageType} from './state'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const ProfileReducer = (state:ProfilePageType, action:ActionType) => {
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