import {applyMiddleware, combineReducers, Store} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import ProfileReducer from './profile-reducer';
import DialogReducer from './dialog-reducer';
import SitebarReducer from './sitebar-reducer';
import UsersReducer from './users-reducer';
import AuthReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    siteBar: SitebarReducer,
    usersPage: UsersReducer,
    auth:AuthReducer,

})

export type ReducerType = ReturnType<typeof rootReducer>

let store: Store<ReducerType> = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store

export default store