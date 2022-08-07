import React from 'react';
import {ReducerType} from '../../redux/redux-store';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileTC, ProfileType, savePhotoTC, setStatusTC, updateStatusTC} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Preloader} from '../common/preloader/Preloader';
import {compose} from 'redux';
import {getId, getIsAuth, getProfile, getStatus} from '../../redux/profile-selectors';

export type PathParamsType = {
    userId: string
}

export type MapStateToPropsType = {
    profile: ProfileType | null,
    status: string,
    isAuth: boolean,
    id: number | null
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void,
    setStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    savePhoto: (file: File) => void

}
export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type ProfileContainerPropsType = OwnPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType, ReducerType> {
    refreshProfile() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id as number;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.setStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<ReducerType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (!this.props.profile)
            ? <Preloader/>
            : <div>
                <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}
                         isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
            </div>;
    }
};

let mapStateToProps = (state: ReducerType): MapStateToPropsType => ({
    profile: getProfile(state),
    status: getStatus(state),
    id: getId(state),
    isAuth: getIsAuth(state),
});

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>(
        mapStateToProps,
        {
            getUserProfile: getUserProfileTC,
            setStatus: setStatusTC,
            updateStatus: updateStatusTC,
            savePhoto: savePhotoTC
        }
    ),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);