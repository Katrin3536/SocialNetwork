import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, deletePostActionCreator, PostDataType,} from '../../../redux/profile-reducer';
import {ReducerType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';

export type mapStateToPropsType = {
    postData: PostDataType[],


}

export type mapDispatchToPropsType = {
    addPost: (newPostText:string) => void,
    deletePost:(idPost:number)=>void
}

export type MyPostType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
    };
};

let mapDispatchToProps = (dispatch: Dispatch): { deletePost: (id: number) => void; addPost: (newPostText: string) => void } => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText));
        },
        deletePost: (idPost:number) => {
            dispatch(deletePostActionCreator(idPost));
        }
    };
};

export default compose<React.ComponentType>(connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps, mapDispatchToProps))(MyPosts);
// const MyPostsContainer = connect<mapStateToPropsType,mapDispatchToPropsType,{},ReducerType >(mapStateToProps, mapDispatchToProps)(MyPosts);
// export default MyPostsContainer;