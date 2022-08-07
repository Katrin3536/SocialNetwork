import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import picture from '../../../assets/images/Cappadocia_2.jpg';
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import photo from '../../../assets/images/avatarIcon.jpg';

export type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (value: File) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatus, isOwner, savePhoto}): JSX.Element => {
    if (!profile) {
        return <Preloader/>;
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div>
                <img className={s.picture} src={picture}/>
                <div className={s.descriptionBlock}>
                    <img src={profile.photos.large || photo} className={s.mainPhoto}/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;