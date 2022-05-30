import React from 'react';
import {connect} from 'react-redux';
import {
    followSuccessAC, getUsersThunkCreator,
    setCurrentPageAC,
    toggleFollowingProgressAC,
    unfollowSuccessAC,
    UsersType
} from '../../redux/users-reducer';
import {ReducerType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/preloader/Preloader';

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
    // setUsers: (users: UsersType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    // setTotalUsersCount: (tottalCount: number) => void,
    // toggleIsFetching: (isFetching: boolean) => void,
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void

}


export  type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersAPIComponentPropsType, ReducerType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // });
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
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>;
    }
}

const mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID));
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID));
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//         toggleFollowingProgress: (isFetching: boolean) => {
//             dispatch(toggleFollowingProgressAC(isFetching));
//         }
//     };
// };

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps, {
    follow: followSuccessAC,
    unfollow: unfollowSuccessAC,
    // setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    // setTotalUsersCount: setTotalCountAC,
    // toggleIsFetching: toggleIsFetchingAC,
    // toggleFollowingProgress: toggleFollowingProgressAC,
    getUsers: getUsersThunkCreator,
})(UsersContainer);