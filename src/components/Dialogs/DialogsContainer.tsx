import React from 'react';
import {DialogPageType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialog-reducer';
import {Dispatch} from 'redux';
import {ReducerType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

type mapStateToPropsType = {
    dialogPage: DialogPageType
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

const DialogsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {},ReducerType>(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;