import React from 'react';
import s from './ProfileInfo.module.css';
import picture from '../../../assets/images/Cappadocia_2.jpg';
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

export type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatus}): JSX.Element => {
    if (!profile) {
        return <Preloader/>;
    }
    return (
        <div>
            <div>
                <img className={s.picture} src={picture}/>
                <div className={s.descriptionBlock}>
                    <img src={profile.photos.large}/>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;