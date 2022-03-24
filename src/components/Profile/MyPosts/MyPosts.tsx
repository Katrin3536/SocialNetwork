import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {PostDataType} from '../../../redux/state';

type MyPostType = {
    postData: PostDataType[],
    addPost:(postMessage:string)=>void
}

const MyPosts = (props: MyPostType): JSX.Element => {

    let postElement: JSX.Element[] = props.postData.map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>);

    let newPostElement= React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            newPostElement.current.value='';
        }
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}> </textarea></div>
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