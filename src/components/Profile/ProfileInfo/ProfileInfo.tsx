import React from 'react';
import s from './ProfileInfo.module.css';
import picture from '../../../assets/images/Cappadocia_2.jpg'
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';

export type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo = (props:ProfileInfoType): JSX.Element => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div><img className={s.picture} src={picture}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;