import React from 'react';
import {ReducerType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {FriendType} from '../../redux/sitebar-reducer';
import Navbar from './Navbar';
import {compose} from 'redux';

export type mapStateToPropsType = {
    siteBar: FriendType[]
}

let mapStateToProps = (state:ReducerType): mapStateToPropsType=> {
    return {
        siteBar:state.siteBar.friends
    }
}

export default compose<React.ComponentType>(connect<mapStateToPropsType,{},{},ReducerType>(mapStateToProps))(Navbar);

// const NavbarContainer = connect<mapStateToPropsType,{},{},ReducerType >(mapStateToProps)(Navbar)
//
// export default NavbarContainer;