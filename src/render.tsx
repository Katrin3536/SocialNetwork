import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App';
import {addPost, StateType} from './redux/state';


export let rerenderEntireTree = (state: StateType)=> {
    ReactDOM.render(<App state = {state} addPost = {addPost}/>,
        document.getElementById('root'))
}
