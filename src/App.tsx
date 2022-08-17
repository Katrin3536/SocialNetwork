import React from 'react';
import './App.css';
import {Redirect, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {ReducerType} from './redux/redux-store';
import {compose} from 'redux';
import {initializeAppTC} from './redux/app-reducer';
import {Preloader} from './components/common/preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';

const DialogsContainer: React.LazyExoticComponent<React.ComponentType> = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer: React.LazyExoticComponent<React.ComponentType> = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login: React.LazyExoticComponent<React.ComponentType> = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component<AppPropsType, ReducerType> {
    catchAllUnhandledErrors=(promiseRejectionEvent:PromiseRejectionEvent)=>{
        alert(promiseRejectionEvent)
}
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection',this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection',this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/" render={()=><Redirect to={'/profile'}/>}/>
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={withSuspense(Login)}/>
                </div>
            </div>
        );
    }
}

export type AppPropsType = mapDispatchToPropsType & mapStateToPropsType

export type mapDispatchToPropsType = {
    initializeApp: () => void,
}

export type mapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: ReducerType): mapStateToPropsType => ({
    initialized: state.app.initialized
});
export default compose<React.ComponentType>(
    withRouter,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, ReducerType>(mapStateToProps, {initializeApp: initializeAppTC})
)(App);

