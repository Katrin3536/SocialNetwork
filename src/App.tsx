import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Store} from 'redux';
import {ReducerType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: Store<ReducerType>
}

function App(props: AppPropsType): JSX.Element {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar store={props.store}/>

                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/profile" render={() => <Profile store={props.store} />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
