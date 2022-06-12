import React from 'react';
import {ReducerType} from '../../redux/redux-store';
import Header from './Header';
import {connect} from 'react-redux';
import {logoutTC, setAuthUserDataAC} from '../../redux/auth-reducer';
import { compose } from 'redux';

export type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

export type mapDispatchToPropsType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => void
    logout:()=>void
}

export type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType, ReducerType> {
    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        );
    }
}

let mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default compose<React.ComponentType>(connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps,
    {setAuthUserData: setAuthUserDataAC, logout: logoutTC}))(HeaderContainer)
//
// export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps,
//     {setAuthUserData: setAuthUserDataAC, getAuthUser: getAuthUserDataTC})(HeaderContainer);
