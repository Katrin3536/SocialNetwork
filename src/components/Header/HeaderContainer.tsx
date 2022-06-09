import React from 'react';
import {ReducerType} from '../../redux/redux-store';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserDataTC, setAuthUserDataAC} from '../../redux/auth-reducer';
import { compose } from 'redux';

export type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

export type mapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    getAuthUser:()=>void
}

export type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType, ReducerType> {
    componentDidMount() {
        this.props.getAuthUser()
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

export default compose<React.ComponentType>(connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps,
    {setAuthUserData: setAuthUserDataAC, getAuthUser: getAuthUserDataTC}))(HeaderContainer)
//
// export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps,
//     {setAuthUserData: setAuthUserDataAC, getAuthUser: getAuthUserDataTC})(HeaderContainer);
