import UsersReducer, {
    followSuccessAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleFollowingProgressAC,
    toggleIsFetchingAC,
    unfollowSuccessAC,
    UserActionType,
    UsersPageType
} from './users-reducer';

let state: UsersPageType;
let followingState:UsersPageType;

beforeEach(() => {
    state = {
        users: [],
        totalUsersCount: 0,
        pageSize: 10,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [],
    };

    followingState = {
        users: [
            {
                id: 1,
                photos: 'string',
                followed: false,
                name: 'Ken',
                status: '123'
            },
            {
                id: 2,
                photos: 'string',
                followed: true,
                name: 'Alice',
                status: '123'
            }],
        totalUsersCount: 0,
        pageSize: 10,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [],
    };

});

test('Follow to user is successfully', () => {
    let action: UserActionType = followSuccessAC(1);
    let newState = UsersReducer(followingState, action);
    expect(newState.users[0].followed).toBe(true);
});

test('Unfollow to user is success', () => {
    let action: UserActionType = unfollowSuccessAC(2);
    let newState = UsersReducer(followingState, action);
    expect(newState.users[1].followed).toBe(false);
});

test('property isFetching is changed successfully', () => {
    let action: UserActionType = toggleIsFetchingAC(false);
    let newState = UsersReducer(state, action);
    expect(newState.isFetching).toBe(false);
});

test('property followingInProgress is changed successfully', () => {
    let action: UserActionType = toggleFollowingProgressAC(true, 2);
    let newState = UsersReducer(followingState, action);
    expect(newState.followingInProgress.length).toBe(1);
});


test('users are get successfully', () => {
    const newUsers = [{
        id: 1,
        photos: 'string',
        followed: true,
        name: 'Ken',
        status: '123'
    }];

    let action: UserActionType = setUsersAC(newUsers);

    let newState = UsersReducer(state, action);
    expect(newState.users.length).toBe(1);
});

test('current page are set successfully', () => {
    let action: UserActionType = setCurrentPageAC(2);

    let newState = UsersReducer(state, action);
    expect(newState.currentPage).toBe(2);
});

test('total count are set successfully', () => {
    let action: UserActionType = setTotalCountAC(3);

    let newState = UsersReducer(state, action);
    expect(newState.totalUsersCount).toBe(3);
});


