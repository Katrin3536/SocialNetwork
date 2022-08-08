import React from 'react';
import {Input, Textarea} from '../../../common/formsControl/FormsControls';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type ProfileDataFormType = {
    fullName:string,
    lookingForAJob:boolean,
    lookingForAJobDescription:string,
    aboutMe:string
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({handleSubmit}) => {

    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        <div>
            <b>Full name:</b>: {<Field component={Input} validate={[]} name={'fullName'} placeholder={'Full name'}/>}
        </div>
        <div>
            <b>Looking for a job:</b>: {<Field component={Input} type={'checkbox'} validate={[]} name={'lookingForAJob'}
                                               placeholder={'Looking for a job'}/>}
        </div>
        <div>
            <b>My professional skills:</b>:{<Field component={Textarea} validate={[]} name={'lookingForAJobDescription'}
                                                   placeholder={'My professional skills'}/>}
        </div>
        <div>
            {/*    <b>Contacts:</b>: {Object.entries(profile.contacts).map(([key, value]) => {*/}
            {/*    return <Contacts key={key} contactTitle={key} contactValue={value}/>;*/}
            {/*})}*/}
        </div>
        <div>
            <b>About me:</b>: {<Field component={Textarea} validate={[]} name={'aboutMe'}
                                      placeholder={'About me'}/>}
        </div>
    </form>;
};

const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;