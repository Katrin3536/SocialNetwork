import AppReducer, {AppActionType, AppReducerType, initializedSuccesAC} from './app-reducer';

test('App is initialized successfully', () => {
    let state:AppReducerType = {
        initialized: false
    }
    let action: AppActionType = initializedSuccesAC();
    let newState = AppReducer(state, action);
    expect(newState.initialized).toBe(true);
});