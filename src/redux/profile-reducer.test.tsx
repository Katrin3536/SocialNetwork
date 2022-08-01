import profileReducer, {
    addPostActionCreator,
    deletePostActionCreator,
    ProfileActionType,
    ProfilePageType
} from './profile-reducer';

let state: ProfilePageType;

beforeEach(() => {
    state = {
        postData: [
            {id: 1, message: 'Hi! How are you?', likeCount: 10},
            {id: 2, message: 'My first post', likeCount: 15},
        ],
        profile: null,
        status: ''
    };
});

test('length of postData should be incremented', () => {
    let action: ProfileActionType = addPostActionCreator('it is the real treasure house');
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3);
});

test('postData should be incremented with new message', () => {
    let action: ProfileActionType = addPostActionCreator('it is the real treasure house');
    let newState = profileReducer(state, action);
    expect(newState.postData[2].message).toBe('it is the real treasure house');
});

test('after deleting length of messages should be decremented', () => {
    let action: ProfileActionType = deletePostActionCreator(1);
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(1);
});

test('after deleting length of messages should not be decremented if id incorrect', () => {
    let action: ProfileActionType = deletePostActionCreator(10);
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(2);
});
