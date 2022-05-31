import React from 'react';
import {ProfileActionType} from './profile-reducer';
import {AppActionsType} from './redux-store';

export type FriendType = {
    id: number,
    name: string
}

export type FriendsType = {
    friends: FriendType[]
}

let initialState = {
        friends: [
            {id: 1, name: 'Masha'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Dasha'},
        ]
    }

const SitebarReducer = (state:FriendsType = initialState, action:AppActionsType):FriendsType => {
    return state;
}
export default SitebarReducer;