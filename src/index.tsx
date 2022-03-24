import React from 'react';
import './index.css';
import {rerenderEntireTree} from './render';
import state, {StateType} from './redux/state';

rerenderEntireTree(state);