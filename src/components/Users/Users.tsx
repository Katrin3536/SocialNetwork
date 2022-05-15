import React from 'react';
import s from './Users.module.css';
import photo from '../../assets/images/avatarIcon.jpg';
import {UsersType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import { UsersAPI } from '../../api/api';

export type UsersPropsType = {
    onPageChanged: (p: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: UsersType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span
                        className={props.currentPage === p && s.selected}
                        key={index}
                        onClick={(e) => props.onPageChanged(p)
                        }>
                            {p}
                        </span>;
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <NavLink to={'/profile/' + u.id}><img className={s.usersPhoto}
                                                                 src={u.photos.small != null ? u.photos.small : photo}/>
                           </NavLink>
                       </div>
                       <div> {u.followed
                           ? <button onClick={
                               () => {
                                   UsersAPI.deleteUsers(u.id).
                                   then(data => {
                                       if (data.resultCode === 0) {
                                           props.unfollow(u.id);
                                       }
                                   });
                               }}>Unfollow</button>
                           : <button onClick={
                               () => {
                                   UsersAPI.postUsers(u.id)
                                       .then(data => {
                                       if (data.resultCode === 0) {
                                           props.follow(u.id);
                                       }
                                   });
                               }}>Follow</button>
                       }
                       </div>
                   </span>
                    <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{'u.location.country'}</div>
                           <div>{'u.location.city'}</div>
                       </span>
                   </span>
                </div>)
            }
        </div>
    );
};