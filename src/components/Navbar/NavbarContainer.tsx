import React from 'react';
import {ReducerType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {FriendType} from '../../redux/sitebar-reducer';
import Navbar from './Navbar';

export type mapStateToPropsType = {
    siteBar: FriendType[]
}

let mapStateToProps = (state:ReducerType): mapStateToPropsType=> {
    return {
        siteBar:state.siteBar.friends
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;