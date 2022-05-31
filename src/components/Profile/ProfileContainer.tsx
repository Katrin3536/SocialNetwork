import React from 'react';
import {ReducerType} from '../../redux/redux-store';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileTC, ProfileType} from '../../redux/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {Preloader} from '../common/preloader/Preloader';

export type PathParamsType = {
    userId: string
}

export type MapStateToPropsType = {
    profile: ProfileType | null,
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}
export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type ProfileContainerPropsType = OwnPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<ProfileContainerPropsType, ReducerType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {

        if(!this.props.isAuth) return <Redirect to={"/login"}/>

        return (!this.props.profile)
            ? <Preloader/>
            : <div>
                <Profile profile={this.props.profile}/>
            </div>;
    }
};

let mapStateToProps = (state: ReducerType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>(
    mapStateToProps,
    {getUserProfile: getUserProfileTC}
)(WithUrlDataContainerComponent);