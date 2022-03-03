import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = ():JSX.Element => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
           <Post message = "Hi! How are you?" likeCount={10}/>
           <Post message = "My first post" likeCount={15}/>
        </div>
    );
};

export default MyPosts;