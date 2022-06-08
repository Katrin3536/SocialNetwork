import React from 'react';
import {DialogPageType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialog-reducer';
import {compose, Dispatch} from 'redux';
import {ReducerType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type mapStateToPropsType = {
    dialogPage: DialogPageType,
}

type mapDispatchToPropsType = {
    updateNewMessageBody:(body:string)=>void,
    sendMessage:()=>void
}

export type DialogsType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state:ReducerType): mapStateToPropsType=> {
    return {
        dialogPage:state.dialogPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        updateNewMessageBody:(body:string) => {
          dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: ()=> {
          dispatch(sendMessageActionCreator());
        }
    }
}

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {},ReducerType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
