import React from 'react';
import {ProfileAPI} from '../api/api';
import {AppThunk} from './redux-store';

export type PostDataType = {
    id: number,
    message: string,
    likeCount: number,
}

export type ProfileType = {
    aboutMe: string
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
    profile: ProfileType | null,
    status: string,
}

export type ProfileActionType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostActionCreator>

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST'

let initialState = {
    postData: [
        {id: 1, message: 'Hi! How are you?', likeCount: 10},
        {id: 2, message: 'My first post', likeCount: 15},
    ],
    profile: null,
    status: ''
};

const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case 'DELETE-POST':
            return {...state, postData:state.postData.filter((post)=>post.id!==action.idPost) }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};
export const addPostActionCreator = (newPostText: string) => {
    return {type: ADD_POST, newPostText} as const;
};
export const deletePostActionCreator = (idPost: number) => {
    return {type: DELETE_POST, idPost} as const;
};

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const;
};

export const setStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const;
};

export const getUserProfileTC = (userId: number): AppThunk => (dispatch) => {
    ProfileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfileAC(data));
        });
};

export const setStatusTC = (userId: number): AppThunk => (dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatusAC(data));
        });
};

export const updateStatusTC = (status: string): AppThunk => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        });
};

export default ProfileReducer;