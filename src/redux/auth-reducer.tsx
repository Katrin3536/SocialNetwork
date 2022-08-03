import React from 'react';
import {AuthAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

export type AuthType = {
    id: number | null
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export type AuthActionType = ReturnType<typeof setAuthUserDataAC>

const SET_USER_DATA = 'auth/SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const AuthReducer = (state: AuthType = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const;
};

export const getAuthUserDataTC = (): AppThunk<Promise<void>> => async (dispatch) => {
    let data = await AuthAPI.getAuth();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserDataAC(id, email, login, true));
    }
};

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    let data = await AuthAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataTC());
    } else {
        let message: string = data.messages.length > 0 ? data.messages[0] : 'some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logoutTC = (): AppThunk => async (dispatch) => {
    let data = await AuthAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, true));
    }
};

export default AuthReducer;