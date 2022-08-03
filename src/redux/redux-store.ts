import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore, Store} from 'redux';
import ProfileReducer, {ProfileActionType} from './profile-reducer';
import DialogReducer, {DialogActionType} from './dialog-reducer';
import SitebarReducer from './sitebar-reducer';
import UsersReducer, {UserActionType} from './users-reducer';
import AuthReducer, {AuthActionType} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form';
import AppReducer, {AppActionType} from './app-reducer';

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    siteBar: SitebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer

});

export type ReducerType = ReturnType<typeof rootReducer>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: Store<ReducerType> = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)
));

export type AppActionsType =
    AuthActionType
    | DialogActionType
    | ProfileActionType
    | UserActionType
    | FormAction
    | AppActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReducerType, unknown, AppActionsType>

//@ts-ignore
window.store = store;

export default store;