import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {PostDataType} from '../../../redux/state';

type MyPostType = {
    postData: PostDataType[],
    addPost:()=>void,
    newPostText: string,
    ubdateNewPostText:(newText:string)=>void
}

const MyPosts = (props: MyPostType): JSX.Element => {

    let postElement: JSX.Element[] = props.postData.map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>);

    const addPost = () => {
        props.addPost && props.addPost();
    };

 const onChangeTextArea = (e:ChangeEvent<HTMLTextAreaElement>) => {
     props.ubdateNewPostText(e.currentTarget.value);
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
                {/*<Post message={PostData[0].message} likeCount={PostData[0].likeCount}/>*/}
                {/*<Post message={PostData[1].message} likeCount={PostData[1].likeCount}/>*/}
            </div>
        </div>
    );
};

export default MyPosts;