import {ReducerType} from './redux-store';

export const getUsers=(state:ReducerType)=>{
    return state.usersPage.users
}

export const getPageSize = (state:ReducerType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state:ReducerType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state:ReducerType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:ReducerType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state:ReducerType) => {
    return state.usersPage.followingInProgress
}