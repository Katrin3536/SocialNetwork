import React from 'react';

export type UsersType = {
    id: number,
    photos: string,
    followed: boolean,
    name: string,
    status: string,
    // location: {
    //     city: string,
    //     country: string
    // }
}

export type UsersPageType = {
    users: UsersType[],
    totalUsersCount: number,
    pageSize: number
    currentPage: number,
    isFetching:boolean,
    followingInProgress: Array<number>,

}

export type ActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
| ReturnType<typeof toggleIsFetchingAC>
| ReturnType<typeof toggleFollowingProgressAC>

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
   users:[],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const UsersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(el=> el.id === action.userID? {...el, followed: true}: el)}
        case UNFOLLOW:
            return {...state, users: state.users.map(el=> el.id === action.userID? {...el, followed: false}: el)}
        case SET_USERS:
            return {...state, users:action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.isFetching
                    ?[...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id=> id != action.userId)}
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

export const setCurrentPageAC = (currentPage:  number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const;
};
export const setTotalCountAC = (totalCount:  number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    } as const;
};

export const toggleIsFetchingAC = (isFetching:  boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const;
};

export const toggleFollowingProgressAC = (isFetching:  boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,

    } as const;
};

export default UsersReducer;