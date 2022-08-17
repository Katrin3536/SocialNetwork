import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/preloader/Preloader';
import {ContactsType, ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import photo from '../../../assets/images/avatarIcon.jpg';
import ProfileDataForm, {ProfileDataFormType} from './profileDataForm/ProfileDataForm';

export type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (value: File) => void;
    saveProfile: (fullName: string,
                  lookingForAJob: boolean,
                  lookingForAJobDescription: string,
                  aboutMe: string,
                  contacts: ContactsType) => void | Promise<void>
}

const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                    profile,
                                                    status,
                                                    updateStatus,
                                                    isOwner,
                                                    savePhoto,
                                                    saveProfile
                                                }): JSX.Element => {

    const [editMode, setEditMode] = useState<boolean>(false);

    if (!profile) {
        return <Preloader/>;
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            savePhoto(e.target.files[0]);
        }
    };
    const goToEditMode = () => {
        setEditMode(true);
    };

    const onSubmit = (formData: ProfileDataFormType) => {
        // @ts-ignore
        saveProfile(formData.fullName, formData.lookingForAJob, formData.lookingForAJobDescription, formData.aboutMe, formData.contacts).then(
            () => {
                setEditMode(false);
            }
        );
    };

    return (
        <div>
            <div>
                {/*<img className={s.picture} src={picture}/>*/}
                <div className={s.descriptionBlock}>

                    <img src={profile.photos.large || photo} className={s.mainPhoto}/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                    {editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit}/> :
                        <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}/>}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export type ProfileDataType = {
    profile: ProfileType,
    isOwner: boolean,
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name:</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b>:{profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>Contacts:</b>: {Object.entries(profile.contacts).map(([key, value]) => {
            return <Contacts key={key} contactTitle={key} contactValue={value}/>;
        })}
        </div>
        <div>
            <b>About me:</b>: {profile.aboutMe}
        </div>
    </div>;
};

export type ContactType = {
    contactTitle: string,
    contactValue: string
}

const Contacts: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>;
};

export default ProfileInfo;