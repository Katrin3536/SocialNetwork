import React from 'react';
import {connect} from 'react-redux';
import {
    followSuccessAC,
    getUsersThunkCreator,
    setCurrentPageAC,
    unfollowSuccessAC,
    UsersType
} from '../../redux/users-reducer';
import {ReducerType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';

export type mapStateToPropsType = {
    users: UsersType[],
    pageSize: number
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type mapDispatchToPropsType = {
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setCurrentPage: (currentPage: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
}

export  type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersAPIComponentPropsType, ReducerType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>;
    }
}

const mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps, {
        follow: followSuccessAC,
        unfollow: unfollowSuccessAC,
        setCurrentPage: setCurrentPageAC,
        getUsers: getUsersThunkCreator,
    })
)(UsersContainer);