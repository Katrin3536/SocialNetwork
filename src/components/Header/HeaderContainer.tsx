import React from 'react';
import {ReducerType} from '../../redux/redux-store';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserDataAC} from '../../redux/auth-reducer';
import {AuthAPI} from '../../api/api';

export type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

export type mapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

export type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType, ReducerType> {
    componentDidMount() {
        AuthAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

let mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps, {setAuthUserData: setAuthUserDataAC})(HeaderContainer);
