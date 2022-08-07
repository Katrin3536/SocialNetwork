import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

export type PropsType = {
    profile: ProfileType,
    status: string,
    updateStatus:(status: string)=>void;
    isOwner:boolean;
    savePhoto:(value:File)=>void

}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
           <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <MyPostsContainer
            />
        </div>
    );
};

export default Profile;