import {applyMiddleware, combineReducers, Store} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import ProfileReducer, {ProfileActionType} from './profile-reducer';
import DialogReducer, {DialogActionType} from './dialog-reducer';
import SitebarReducer from './sitebar-reducer';
import UsersReducer, {UserActionType} from './users-reducer';
import AuthReducer, {AuthActionType} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    siteBar: SitebarReducer,
    usersPage: UsersReducer,
    auth:AuthReducer,
    form: formReducer

})

export type ReducerType = ReturnType<typeof rootReducer>

let store: Store<ReducerType> = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppActionsType = AuthActionType | DialogActionType | ProfileActionType | UserActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReducerType, unknown, AppActionsType>

//@ts-ignore
window.store = store

export default store