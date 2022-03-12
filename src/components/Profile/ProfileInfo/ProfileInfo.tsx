import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (): JSX.Element => {
    return (
        <div>
            <div><img src="https://incomartour.com.ua/mediafiles/images/WOW%20(1).jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;