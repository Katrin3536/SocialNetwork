import React from 'react';
import {UsersType} from '../../redux/users-reducer';
import {Pagination} from '../common/pagination/Pagination';
import {User} from './user/User';

export type UsersPropsType = {
    onPageChanged: (p: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: UsersType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    followingInProgress: Array<number>,
}

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    currentPage,
                                                    onPageChanged,
                                                    pageSize,
                                                    totalUsersCount,
                                                    unfollow,
                                                    followingInProgress,
                                                    follow
                                                }) => {
    return (
        <div>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                        totalUsersCount={totalUsersCount} portionSize={10}/>
            <div>
                {users.map(u => <User user={u} key={u.id} unfollow={unfollow} follow={follow}
                                       followingInProgress={followingInProgress}/>)}
            </div>
        </div>
    );
};