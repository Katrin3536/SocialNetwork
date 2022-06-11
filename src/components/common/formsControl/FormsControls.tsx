import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './FormsControls.module.css';

type DefaultPropsType = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

type TextareaType = {
    input: DefaultPropsType
    meta: {
        error: string,
        touched: string
    }
}

export const Textarea: React.FC<TextareaType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input}{...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    );
};

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputType = {
    input: DefaultInputPropsType
    meta: {
        error: string,
        touched: string
    }
}

export const Input: React.FC<InputType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input}{...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    );
};

