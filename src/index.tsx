import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import state, {addPost, StateType, subscribe, ubdateNewPostText} from './redux/state';


let rerenderEntireTree = ()=> {
    ReactDOM.render(<App state = {state} addPost = {addPost} ubdateNewPostText={ubdateNewPostText}/>,
        document.getElementById('root'))
}
rerenderEntireTree()

subscribe(rerenderEntireTree)