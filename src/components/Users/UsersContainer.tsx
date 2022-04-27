import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC, UsersType} from '../../redux/users-reducer';
import {ReducerType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


export type mapStateToPropsType = {
    users: UsersType[]
}

const mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users:UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);