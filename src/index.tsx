import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';


let _rerenderEntireTree = ()=> {
    ReactDOM.render(<App state = {store.getState()} dispatch = {store.dispatch.bind(store)}/>,
        document.getElementById('root'))
}
_rerenderEntireTree()

store.subscribe(_rerenderEntireTree)