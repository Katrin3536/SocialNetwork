import React from 'react';
import MyPosts from './MyPosts';
import {
    addPostActionCreator,
    PostDataType,
    updateNewTextActionCreator
} from '../../../redux/profile-reducer';
import {ReducerType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type mapStateToPropsType = {
    newPostText: string
    postData: PostDataType[]
}

export type mapDispatchToPropsType = {
    updateNewPostText: (value: string) => void,
    addPost: () => void
}

export type MyPostType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData
    };
};

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (value: string) => {
            dispatch(updateNewTextActionCreator(value));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    };
};

const MyPostsContainer = connect<mapStateToPropsType,mapDispatchToPropsType,{},ReducerType >(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;