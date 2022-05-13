import React from 'react';
import {ReducerType} from '../../redux/redux-store';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfileAC} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';


export type PathParamsType = {
    userId: string
}

export type MapStateToPropsType = {
    profile: ProfileType | null
}

export type MapDispatchToPropsType = {
    setUserProfile:(profile:ProfileType) => void
}
 export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type ProfileContainerPropsType = OwnPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<ProfileContainerPropsType, ReducerType>{
    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (!this.props.profile)
            ? <div>Loader</div>
            : <div>
                <Profile profile={this.props.profile}/>
              </div>

    }
};

let mapStateToProps =(state: ReducerType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>(
    mapStateToProps,
    {setUserProfile: setUserProfileAC}
)(WithUrlDataContainerComponent);