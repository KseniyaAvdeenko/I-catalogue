import {IUser} from "../../interface/IUser";
import {AppDispatch} from "../store";
import axios from "axios";
import {apiUrl, getAuthConfigApplicationJson} from "./apiUrl";
import {userSlice} from "../reducers/userSlice";
import {authSlice} from "../reducers/authSlice";


export const loadCurrentUser = (access: string) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.get<IUser>(apiUrl + 'auth/users/me/', getAuthConfigApplicationJson(access))
            dispatch(userSlice.actions.loadingCurrentUserSuccess(response.data))
            dispatch(authSlice.actions.loggedIn())
        } catch (error) {
            dispatch(userSlice.actions.loadingCurrentUserFail('Ошибка загрузки авторизованного пользователя'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const loadUsers = (access: string) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.get<IUser[]>(apiUrl + 'auth/users/', getAuthConfigApplicationJson(access))
            dispatch(userSlice.actions.loadingUsersSuccess(response.data))
        } catch (error) {
            dispatch(userSlice.actions.loadingUsersFail('Ошибка загрузки пользователей'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}
