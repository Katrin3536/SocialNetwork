export type FriendType = {
    id: number,
    name: string
}

export type DialogsDataType = {
    id: number,
    name: string,
    ava: string
}
export type MessageDataType = {
    id: number,
    message: string
}
export type PostDataType = {
    id: number,
    message: string,
    likeCount: number,
}
export type FriendsType = {
    friends: FriendType[]
}


export type ProfilePageType = {
    postData: PostDataType[],
    newPostText: string,
}

export type DialogPageType = {
    dialogs: DialogsDataType[],
    messages: MessageDataType[]
}


export type StateType = {
    profilePage: ProfilePageType,
    dialogPage: DialogPageType,
    siteBar: FriendsType
}

export type StoreType = {
    _state:StateType,
    addPost:()=>void,
    ubdateNewPostText:(newText: string)=>void,
    subscribe:(observer: () => void)=>void,
    _rerenderEntireTree:()=>void,
    getState:()=>StateType,


}

const store:StoreType = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi! How are you?', likeCount: 10 },
                { id: 2, message: 'My first post', likeCount: 15 },
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogs: [
                { id: 1, name: 'Masha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdppf1lDbWRxFZdW9QfosE0BGsA28ks2jnYcZHl9bFiVtM8RiuZLHjtOKRrL7muVtdcmo&usqp=CAU' },
                { id: 2, name: 'Yulia', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdppf1lDbWRxFZdW9QfosE0BGsA28ks2jnYcZHl9bFiVtM8RiuZLHjtOKRrL7muVtdcmo&usqp=CAU' },
                { id: 3, name: 'Katya', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdppf1lDbWRxFZdW9QfosE0BGsA28ks2jnYcZHl9bFiVtM8RiuZLHjtOKRrL7muVtdcmo&usqp=CAU' },
                { id: 4, name: 'Andrew', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU' },
                { id: 5, name: 'Pavel', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU' },
                { id: 6, name: 'Sergey', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Are you ok?' },
            ]
        },
        siteBar: {
            friends: [
                { id: 1, name: 'Masha' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Dasha' },
            ]
        },
    },
    addPost() {
        let newPost: PostDataType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree();
    },
    ubdateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree();
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    _rerenderEntireTree() {
        console.log('state was changed');
    },
    getState() {
        return this._state
    },
};

export default store;

