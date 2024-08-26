import {IUser} from "../../interface/IUser";
import {AppDispatch} from "../store";
import axios from "axios";
import {apiUrl, getAuthConfigApplicationJson} from "./apiUrl";
import {userSlice} from "../reducers/userSlice";


export const loadCurrentUser = () => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            // const config = {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `JWT ${localStorage.getItem('access')}`,
            //         'Accept': 'application/json'
            //     }
            // };
            const response = await axios.get<IUser>(apiUrl + 'auth/users/me/', getAuthConfigApplicationJson(localStorage.access))
            dispatch(userSlice.actions.loadingCurrentUserSuccess(response.data))
        } catch (error) {
            dispatch(userSlice.actions.loadingCurrentUserFail('Что-то пошло не так'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const loadUsers = () => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            // const config = {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `JWT ${localStorage.access}`,
            //         'Accept': 'application/json'
            //     }
            // };
            const response = await axios.get<IUser[]>(apiUrl + 'auth/users/', getAuthConfigApplicationJson(localStorage.access))
            dispatch(userSlice.actions.loadingUsersSuccess(response.data))
        } catch (error) {
            dispatch(userSlice.actions.loadingUsersFail('Что-то пошло не так'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}
export const loadUser = (id: number) => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            // const config = {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `JWT ${localStorage.access}`,
            //         'Accept': 'application/json'
            //     }
            // };
            const response = await axios.get<IUser>(apiUrl + `auth/users/${id}/`, getAuthConfigApplicationJson(localStorage.access))
            dispatch(userSlice.actions.loadingUserSuccess(response.data))
        } catch (error) {
            dispatch(userSlice.actions.loadingUserFail('Что-то пошло не так'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}