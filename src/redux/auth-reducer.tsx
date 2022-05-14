import React from 'react';

export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth:boolean
}

export type ActionType = ReturnType<typeof setAuthUserDataAC>

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
};

const AuthReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
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

export default AuthReducer;