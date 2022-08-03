import React from 'react';
import s from './User.module.css';
import photo from '../../../assets/images/avatarIcon.jpg';
import {UsersType} from '../../../redux/users-reducer';
import {NavLink} from 'react-router-dom';

export type UserPropsType = {
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    followingInProgress: Array<number>,
    user: UsersType
}

export const User: React.FC<UserPropsType> = ({user, follow, followingInProgress,unfollow  }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}><img className={s.usersPhoto}
                                                          src={user.photos.small != null ? user.photos.small : photo}/>
                    </NavLink>
                </div>
                <div> {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={
                        () => {
                           unfollow(user.id);
                        }
                    }>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={
                        () => {
                            follow(user.id);
                        }
                    }>Follow</button>
                }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>

    );
};