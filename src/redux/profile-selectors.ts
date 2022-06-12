import {ReducerType} from './redux-store';

export const getProfile = (state: ReducerType) => {
    return state.profilePage.profile;
};

export const getStatus = (state: ReducerType) => {
    return state.profilePage.status;
};

export const getId = (state: ReducerType) => {
    return state.auth.id;
};

export const getIsAuth = (state: ReducerType) => {
    return state.auth.isAuth;
};


