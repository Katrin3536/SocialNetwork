import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


type ProfilePropsType={
    state:ProfilePageType
    addPost:(postMessage:string)=>void
}

const Profile = (props:ProfilePropsType):JSX.Element => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts postData={props.state.postData} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;