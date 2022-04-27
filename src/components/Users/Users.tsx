import React from 'react';
import s from './Users.module.css';
import {UsersType} from '../../redux/users-reducer';

export type UsersPropsType = {
    users: UsersType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users:UsersType[]) => void
}

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: true,
                    photoUrl: "https://content.freelancehunt.com/cdn-cgi/image/format=auto,width=800,dpr=1/snippet/34ada/e9b03/1167943/23FF6C39-7655-437B-A8A8-00C64163CC37.jpeg",
                    fullName: 'Masha',
                    status: 'I like milk',
                    location: {city: 'Borisov', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl:"https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
                    followed: true,
                    fullName: 'Sergey',
                    status: 'I like Cyprus',
                    location: {city: 'Larnaca', country: 'Cyprus'}
                },
                {
                    id: 3,
                    photoUrl:"https://content.freelancehunt.com/cdn-cgi/image/format=auto,width=800,dpr=1/snippet/34ada/e9b03/1167943/23FF6C39-7655-437B-A8A8-00C64163CC37.jpeg",
                    followed: false,
                    fullName: 'Yulia',
                    status: 'I like tests',
                    location: {city: 'London', country: 'Great Britain'}
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img className={s.usersPhoto} src={u.photoUrl}/>
                       </div>
                       <div> {u.followed
                           ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                           : <button onClick={() => props.follow(u.id)}>Follow</button>
                       }
                       </div>
                   </span>
                    <span>
                       <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                       </span>
                   </span>
                </div>)
            }
        </div>
    );
};

export default Users;