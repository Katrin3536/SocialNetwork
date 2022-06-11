import React from 'react';
import {DialogPageType, sendMessageActionCreator} from '../../redux/dialog-reducer';
import {compose, Dispatch} from 'redux';
import {ReducerType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type mapStateToPropsType = {
    dialogPage: DialogPageType,
}

type mapDispatchToPropsType = {
    sendMessage:(newMessageBody:string)=>void
}

export type DialogsType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state:ReducerType): mapStateToPropsType=> {
    return {
        dialogPage:state.dialogPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody:string)=> {
          dispatch(sendMessageActionCreator(newMessageBody));
        }
    }
}

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {},ReducerType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
