import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string;
    likeCount: number;
}

const Post = (props:PostType) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
                {props.message}
                <div>
                    <span>Like{props.likeCount}</span>
                </div>
            </div>
        </div>

    );
};

export default Post;