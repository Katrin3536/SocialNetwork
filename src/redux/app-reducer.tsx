import React from 'react';
import {getAuthUserDataTC} from './auth-reducer';
import {AppThunk} from './redux-store';

export type AppReducerType = {
    initialized: boolean
}

export type AppActionType = ReturnType<typeof initializedSuccesAC>

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

let initialState = {
    initialized: false
};

const AppReducer = (state: AppReducerType = initialState, action: AppActionType): AppReducerType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const initializedSuccesAC = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const;
};

export const initializeAppTC = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserDataTC())
    promise.then(() => {
        dispatch(initializedSuccesAC());
    });
};

export default AppReducer;