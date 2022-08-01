import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {MyPostType} from './MyPostsContainer';
import {AddNewPostFormRedux, FormDataType} from './AddNewPostForm/AddNewPostForm';

const MyPosts = React.memo((props: MyPostType): JSX.Element => {

    let postElement: JSX.Element[] = props.postData.map(post => <Post key={post.id} message={post.message}
                                                                      likeCount={post.likeCount} deletePost={()=>props.deletePost(post.id)}/>);

    const onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
});

export default MyPosts;