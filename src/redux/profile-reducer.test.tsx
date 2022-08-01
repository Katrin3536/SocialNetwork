import profileReducer, {
    addPostActionCreator,
    deletePostActionCreator,
    ProfileActionType,
    ProfilePageType,
    ProfileType,
    setStatusAC,
    setUserProfileAC
} from './profile-reducer';

let state: ProfilePageType;

beforeEach(() => {
    state = {
        postData: [
            {id: 1, message: 'Hi! How are you?', likeCount: 10},
            {id: 2, message: 'My first post', likeCount: 15},
        ],
        profile: {
            aboutMe: 'Katerina',
            userId: 100,
            lookingForAJob: true,
            lookingForAJobDescription: 'string',
            fullName: 'string',
            contacts: {
                github: 'string',
                vk: 'string',
                facebook: 'string',
                instagram: 'string',
                twitter: 'string',
                website: 'string',
                youtube: 'string',
                mainLink: 'string',
            },
            photos: {
                small: 'small',
                large: 'large',
            }
        },
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

test('Profile is setted success', () => {

    let newProfile: ProfileType = {
        aboutMe: 'Hello',
        userId: 23,
        lookingForAJob: true,
        lookingForAJobDescription: 'string',
        fullName: 'string',
        contacts: {
            github: 'string',
            vk: 'string',
            facebook: 'string',
            instagram: 'string',
            twitter: 'string',
            website: 'string',
            youtube: 'string',
            mainLink: 'string',
        },
        photos: {
            small: 'small',
            large: 'large',
        }
    };
    let action: ProfileActionType = setUserProfileAC(newProfile);
    let newState = profileReducer(state, action);
    expect(newState.profile).toBe(newProfile);
});

test('Status is changed success', () => {
    let action: ProfileActionType = setStatusAC('I am ready to work');
    let newState = profileReducer(state, action);
    expect(newState.status).toBe('I am ready to work');
});