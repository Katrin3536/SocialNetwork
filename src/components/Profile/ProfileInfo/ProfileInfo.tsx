import React from 'react';
import s from './ProfileInfo.module.css';
import picture from '../../../assets/images/Cappadocia_2.jpg'
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

export type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus:(status: string)=>void
}

const ProfileInfo = (props:ProfileInfoType): JSX.Element => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.picture} src={picture}/>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                </div>
                {/*<div> NAME:  {props.profile.fullName}</div>*/}
                {/*<div>About me: {props.profile.aboutMe}</div>*/}
                {/*<div>Slogan: {props.profile.lookingForAJobDescription}</div>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>


        </div>
    );
};

export default ProfileInfo;