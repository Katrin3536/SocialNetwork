import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (): JSX.Element => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message="Hi! How are you?" likeCount={10}/>
                <Post message="My first post" likeCount={15}/>
            </div>
        </div>
    );
};

export default MyPosts;