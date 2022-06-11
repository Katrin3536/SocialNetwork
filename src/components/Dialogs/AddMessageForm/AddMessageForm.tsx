import {maxLengthCreator, required} from '../../../utils/validators/validators';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../common/formsControl/FormsControls';

export type FormDataType = {
    newMessageBody: string
}

let maxLength50 = maxLengthCreator(50);

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name={'newMessageBody'}
                       placeholder="Enter your message"/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm);
