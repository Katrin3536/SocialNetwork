import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

export type PropsType = {
    profile: ProfileType
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
           <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
            />
        </div>
    );
};

export default Profile;