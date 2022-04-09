import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';


let _rerenderEntireTree = ()=> {
    ReactDOM.render(<App state = {store.getState()} addPost = {store.addPost.bind(store)} ubdateNewPostText={store.ubdateNewPostText.bind(store)}/>,
        document.getElementById('root'))
}
_rerenderEntireTree()

store.subscribe(_rerenderEntireTree)