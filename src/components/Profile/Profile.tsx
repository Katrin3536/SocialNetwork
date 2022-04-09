import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


type ProfilePropsType={
    profilePage:ProfilePageType
    addPost:()=>void,
    ubdateNewPostText:(newText:string)=>void
}

const Profile = (props:ProfilePropsType):JSX.Element => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts
                postData={props.profilePage.postData}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                ubdateNewPostText={props.ubdateNewPostText}
            />
        </div>
    );
};

export default Profile;