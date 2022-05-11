import React from 'react';
import s from './Users.module.css';
import {UsersType} from '../../redux/users-reducer';
import axios from 'axios';
import photo from '../../assets/images/avatarIcon.jpg';

export type UsersPropsType = {
    users: UsersType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users: UsersType[]) => void,
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : photo}/>
                       </div>
                       <div> {u.followed
                           ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                           : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
    }

}

export default Users;