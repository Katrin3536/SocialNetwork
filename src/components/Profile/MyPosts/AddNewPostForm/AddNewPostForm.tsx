import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import React from 'react';
import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form';
import {Textarea} from '../../../common/formsControl/FormsControls';
import {useDispatch} from 'react-redux';

export type FormDataType={
    newPostText: string;
}
let maxLength30 =maxLengthCreator(30)

export const AddNewPostForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
   const dispatch = useDispatch()
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'newPostText'} component={Textarea} validate={[required, maxLength30]}
                           placeholder={'Post message'} onClick={()=>dispatch(reset('profileAddNewPostForm'))}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
    )
}

export const AddNewPostFormRedux = reduxForm<FormDataType>({form:'profileAddNewPostForm'})(AddNewPostForm)
