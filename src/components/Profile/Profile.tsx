import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


type ProfilePropsType={
    state:ProfilePageType
}

const Profile = (props:ProfilePropsType):JSX.Element => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts postData={props.state.postData}/>
        </div>
    );
};

export default Profile;