import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

export type PropsType = {
    profile: ProfileType,
    status: string,
    updateStatus:(status: string)=>void
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
           <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer
            />
        </div>
    );
};

export default Profile;