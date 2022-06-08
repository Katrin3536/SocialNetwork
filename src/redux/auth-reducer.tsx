import React from 'react';
import {AuthAPI} from '../api/api';
import { AppThunk} from './redux-store';

export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth:boolean
}

export type AuthActionType = ReturnType<typeof setAuthUserDataAC>

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
};

const AuthReducer = (state: AuthType = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserDataAC= (id: number,email: string,login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login
        }
    } as const;
};

export const getAuthUserDataTC=():AppThunk=>(dispatch)=>{
    AuthAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserDataAC(id, email, login));
        }
    });
}

export default AuthReducer;