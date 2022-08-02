import React from 'react';
import {UsersAPI} from '../api/api';
import {AppThunk} from './redux-store';


export type UsersType = {
    id: number,
    photos: string,
    followed: boolean,
    name: string,
    status: string,
}

export type UsersPageType = {
    users: UsersType[],
    totalUsersCount: number,
    pageSize: number
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,

}

export type UserActionType = ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unfollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const UsersReducer = (state: UsersPageType = initialState, action: UserActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)};
        case UNFOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)};
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};
export const followSuccessAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const;
};
export const unfollowSuccessAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const;
};
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const;
};
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const;
};
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    } as const;
};
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const;
};
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,

    } as const;
};

export const getUsersThunkCreator = (page: number, pageSize: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(page))
        UsersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalCountAC(data.totalCount));
        });
    };
};

export const unfollow = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, id));
        UsersAPI.deleteUsers(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccessAC(id));
            }
            dispatch(toggleFollowingProgressAC(false, id));
        });
    };
};

export const follow = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, id));
        UsersAPI.postUsers(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccessAC(id));
            }
            dispatch(toggleFollowingProgressAC(false, id));
        });
    };
};

export default UsersReducer;