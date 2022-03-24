import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css';
import {FriendType} from '../../redux/state';

type FriendsType = {
    stateFriend: FriendType[]
}

const Friends = (props: FriendsType) => {
    return (
        <div className={s.group}>

            <div className={s.title}>Friends</div>

            <div className={s.friends}>
                {props.stateFriend.map(friend => <Friend name={friend.name}/>)}
            </div>
        </div>
    );
};

export default Friends;