import React from 'react';

export type PostDataType = {
    id: number,
    message: string,
    likeCount: number,
}


export type ProfileType = {
    aboutMe:string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    postData: PostDataType[],
    newPostText: string,
    profile: ProfileType | null
}

export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewTextActionCreator> | ReturnType<typeof setUserProfileAC>

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postData: [
        {id: 1, message: 'Hi! How are you?', likeCount: 10},
        {id: 2, message: 'My first post', likeCount: 15},
    ],
    newPostText: '',
    profile: null
};

const ProfileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};
export const addPostActionCreator = () => {
    return {type: ADD_POST} as const;
};

export const updateNewTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const;
};
export const setUserProfileAC= (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const;
};

export default ProfileReducer;