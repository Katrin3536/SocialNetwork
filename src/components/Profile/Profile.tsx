import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType} from '../../redux/state';


type ProfilePropsType={
    profilePage:ProfilePageType
    dispatch: (action: ActionType) => void,
}

const Profile = (props:ProfilePropsType):JSX.Element => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts
                postData={props.profilePage.postData}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    );
};

export default Profile;