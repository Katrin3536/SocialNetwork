import axios from 'axios';
import {ProfileType} from '../redux/profile-reducer';
import { UsersType } from '../redux/users-reducer';

export type MyResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {
        id: number,
        email: string,
        login: string
    }
}

export type UsersResponseType = {
    "items": Array<UsersType>,
    "totalCount": number,
    "error": string,
    resultCode: number

}

export const instance = axios.create({
    withCredentials: true,
    headers:
        {'API-KEY': '3fa0c421-ee0f-4cc4-b325-07905528134a'},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const UsersAPI = {
    getUsers(currentPage:number,pageSize:number) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data);
    },
    postUsers(id:number) {
        return instance.post<UsersResponseType>(`follow/${id}`)
            .then(response=>{ return response.data});
    },
    deleteUsers(id:number) {
        return instance.delete<UsersResponseType>(`follow/${id}`)
            .then(response=> {
                return response.data;
            });
    },

}

export const ProfileAPI = {
    getProfile(userId:number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response=>response.data);
    },
}

export const AuthAPI = {
    getAuth() {
        return instance.get<MyResponseType>(`auth/me`)
            .then(response=>response.data);
    },
}


