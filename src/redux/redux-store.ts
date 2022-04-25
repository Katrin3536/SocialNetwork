import {combineReducers, Store} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import ProfileReducer from './profile-reducer';
import DialogReducer from './dialog-reducer';
import SitebarReducer from './sitebar-reducer';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    siteBar: SitebarReducer
})

export type ReducerType = ReturnType<typeof reducers>

let store: Store<ReducerType> = createStore(reducers);

export default store