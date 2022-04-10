import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {addPostActionCreator, updateNewTextActionCreator} from '../../../redux/profile-reducer';
import {ActionType, PostDataType } from '../../../redux/state';


type MyPostType = {
    postData: PostDataType[],
    newPostText: string,
    dispatch: (action: ActionType) => void,
}

const MyPosts = (props: MyPostType): JSX.Element => {

    let postElement: JSX.Element[] = props.postData.map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>);


    const addPost = () => {
        props.dispatch(addPostActionCreator())
    };

 const onChangeTextArea = (e:ChangeEvent<HTMLTextAreaElement>) => {
     props.dispatch(updateNewTextActionCreator(e.currentTarget.value))
 }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea  onChange={onChangeTextArea} value = {props.newPostText}> </textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;