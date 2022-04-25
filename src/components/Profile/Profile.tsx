import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ReducerType} from '../../redux/redux-store';
import {Store} from 'redux';


type ProfilePropsType={
    store: Store<ReducerType>
}

const Profile = (props:ProfilePropsType):JSX.Element => {
    return (
        <div>
           <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    );
};

export default Profile;