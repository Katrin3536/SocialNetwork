import React from 'react';
import s from './Friend.module.css';


type FriendPropsType = {
    name: string
}

const Friend = (props:FriendPropsType) => {
    return (
        <div className={s.friend}>
            <div className={s.round}></div>
            <div>{props.name}</div>
        </div>
    );
};

export default Friend;