import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/formsControl/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {ReducerType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import s from '../common/formsControl/FormsControls.module.css';

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.loginDesc}><p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}> here
                </a>
            </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p></div>
            <div><Field component={Input} validate={[required]} name={'email'} placeholder={'email'}/></div>
            <div><Field component={Input} type="password" validate={[required]} name={'password'}
                        placeholder={'Password'}/></div>
            <div className={s.checkbox}><Field component={Input} name={'rememberMe'} type="checkbox"/>remember me</div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

const Login:React.FC<LoginPropsType> = ({login, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe);
    };
    if (isAuth) {
        return <Redirect to={'/profile'}/>;
    }
    return <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
};

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type mapStateToPropsType = {
    isAuth: boolean,
    captchaUrl:string|null
}

type LoginPropsType = mapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    };
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps, {login: loginTC})(Login);

