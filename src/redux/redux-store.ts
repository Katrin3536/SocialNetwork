import {combineReducers, Store} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import ProfileReducer from './profile-reducer';
import DialogReducer from './dialog-reducer';
import SitebarReducer from './sitebar-reducer';
import UsersReducer from './users-reducer';

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    siteBar: SitebarReducer,
    usersPage: UsersReducer
})

export type ReducerType = ReturnType<typeof rootReducer>

let store: Store<ReducerType> = createStore(rootReducer);

export default store