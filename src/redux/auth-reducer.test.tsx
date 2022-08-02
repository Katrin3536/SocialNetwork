import AuthReducer, {AuthActionType, AuthType, setAuthUserDataAC} from './auth-reducer';

test('Data is get successfully from server', () => {
    let state: AuthType = {
        id: null,
        email: null,
        login: null,
        isAuth: false
    };

    let action: AuthActionType = setAuthUserDataAC(12, '', '', true);
    let newState = AuthReducer(state, action);
    expect(newState.id).toBe(12);
    expect(newState.isAuth).toBe(true);
});