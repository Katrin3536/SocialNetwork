import React from 'react';
import {ProfileAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

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
    contacts: ContactsType
    photos: PhotosType
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
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
    | ReturnType<typeof savePhotoAC>

export type PhotosType = {
    large: string,
    small: string
}

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_PHOTO = 'profile/SAVE-PHOTO';

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
        case DELETE_POST:
            return {...state, postData: state.postData.filter((post) => post.id !== action.idPost)};
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
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
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

export const savePhotoAC = (photos: PhotosType) => {
    return {
        type: SAVE_PHOTO,
        photos
    } as const;
};


export const getUserProfileTC = (userId: number): AppThunk => async (dispatch) => {
    let data = await ProfileAPI.getProfile(userId);
    dispatch(setUserProfileAC(data));
};

export const setStatusTC = (userId: number): AppThunk => async (dispatch) => {
    let data = await ProfileAPI.getStatus(userId);
    dispatch(setStatusAC(data));
};

export const updateStatusTC = (status: string): AppThunk => async (dispatch) => {
    let data = await ProfileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
};

export const savePhotoTC = (file: File): AppThunk => async (dispatch) => {
    let data = await ProfileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoAC(data.data));
    }
};

export const saveProfileTC = (fullName: string,
                              lookingForAJob: boolean,
                              lookingForAJobDescription: string,
                              aboutMe: string, contacts: ContactsType): AppThunk => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let data = await ProfileAPI.saveProfile(fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts);
    if (data.resultCode === 0) {
        dispatch(getUserProfileTC(userId as number));
    } else {
        let message: string = data.messages.length > 0 ? data.messages[0] : 'some error';
        dispatch(stopSubmit('edit-profile', {_error: message}));
        return Promise.reject(message);
    }
};

export default ProfileReducer;