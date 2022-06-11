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
        {'API-KEY': 'feadb01b-2c7b-4c1e-86f1-b1355367b8e0'},
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
    getStatus(userId:number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response=>response.data);
    },
    updateStatus(status:string){
        return instance.put<MyResponseType>(`profile/status`, {status:status})
            .then(response=>response.data);
    }
}

export const AuthAPI = {
    getAuth() {
        return instance.get<MyResponseType>(`auth/me`)
            .then(response=>response.data);
    },
    login(email:string, password:string, rememberMe:boolean=false) {
        return instance.post<MyResponseType>(`auth/login`, {email, password, rememberMe})
            .then(response=>response.data)
    },
    logout() {
        return instance.delete<MyResponseType>(`auth/login`)
            .then(response=>response.data)
    }
}


