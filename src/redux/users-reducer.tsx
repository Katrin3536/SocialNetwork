import React from 'react';

export type UsersType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}

export type UsersPageType = {
    users: UsersType[]
}

export type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
   users:[]
};

const UsersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el=> el.id === action.userID? {...el, followed: true}: el)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(el=> el.id === action.userID? {...el, followed: false}: el)}
        case 'SET_USERS':
            return {...state, users:[...state.users, ...action.users]}
        default:
            return state;
    }
};
export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const;
};

export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const;
};
export const setUsersAC = (users:  UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const;
};


export default UsersReducer;