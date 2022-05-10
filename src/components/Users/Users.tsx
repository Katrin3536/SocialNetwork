import React from 'react';
import s from './Users.module.css';
import {UsersType} from '../../redux/users-reducer';
import axios from 'axios'
import photo from '../../assets/images/avatarIcon.jpg'



export type UsersPropsType = {
    users: UsersType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users:UsersType[]) => void,
}

const Users = (props: UsersPropsType) => {
    let getUsers = ()=> {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers( response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img className={s.usersPhoto} src={ u.photos.small !=null? u.photos.small: photo }/>
                       </div>
                       <div> {u.followed
                           ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                           : <button onClick={() => props.follow(u.id)}>Follow</button>
                       }
                       </div>
                   </span>
                    <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{"u.location.country"}</div>
                           <div>{"u.location.city"}</div>
                       </span>
                   </span>
                </div>)
            }
        </div>
    );
};

export default Users;