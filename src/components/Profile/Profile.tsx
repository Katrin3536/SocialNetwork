import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = ():JSX.Element => {
    return (
        <div className={s.content}>
            <div><img
                src="https://incomartour.com.ua/mediafiles/images/WOW%20(1).jpg"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;