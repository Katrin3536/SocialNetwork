import React from 'react';
import s from './Post.module.css';
import picture from '../../../../assets/images/cat.jpg'

type PostType = {
    message: string;
    likeCount: number;
}

const Post = (props:PostType): JSX.Element => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={picture}/>
                {props.message}
                <div>
                    <span>Like{props.likeCount}</span>
                </div>
            </div>
        </div>

    );
};

export default Post;