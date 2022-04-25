import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewTextActionCreator} from '../../../redux/profile-reducer';
import {Store} from 'redux';
import {ReducerType} from '../../../redux/redux-store';

export type MyPostsContainerType = {
    store: Store<ReducerType>
}

const MyPostsContainer = (props:MyPostsContainerType) => {
let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };
    const onChangeTextArea = (value: string) => {
        props.store.dispatch(updateNewTextActionCreator(value))
    }
    return (
        <MyPosts updateNewPostText={onChangeTextArea} addPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;