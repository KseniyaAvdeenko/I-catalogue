import {AppDispatch} from "../store";
import axios from "axios";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {authSlice} from "../reducers/authSlice";
import {IAuth, INewUser, INewUserResponse, IUserBase} from "../../interface/IUser";
import {loadCurrentUser} from "./userAction";
import {userSlice} from "../reducers/userSlice";


export const loginUser = (user: IUserBase) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<IAuth>(apiUrl + 'auth/jwt/create/', user)
        dispatch(authSlice.actions.loginSuccess(response.data))
        dispatch(loadCurrentUser(response.data.access))
    } catch (error) {
        dispatch(authSlice.actions.loginFail('Неправильный логин или пароль'))
    }
}

export const logout = (access: string, refreshToken: string) => async (dispatch: AppDispatch) => {
    if (refreshToken && access) {
        try {
            const response = await axios.post<{ refresh: string }>(apiUrl + 'auth/logout/', JSON.stringify({refresh: refreshToken}), getAuthConfigApplicationJson(access))
            console.log(response.data)
            dispatch(authSlice.actions.logoutSuccess())
            dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
        } catch (error) {
            console.log(error)
            dispatch(authSlice.actions.logoutFail('Вы не вышли из системы'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const registerUser = (user: INewUser) => async (dispatch: AppDispatch) => {
    try {
        await axios.post<INewUserResponse>(apiUrl + 'auth/users/', user)
        dispatch(authSlice.actions.registerSuccess(true))
    } catch (error) {
        dispatch(authSlice.actions.registerFail('Ошибка'))
    }
}

export const refreshToken = (refresh: string) => async (dispatch: AppDispatch) => {
    if (refresh) {
        const body = JSON.stringify({refresh: refresh})
        try {
            const response = await axios.post<{ access: string }>(apiUrl + 'auth/jwt/refresh/', body, getRequestHeaders())
            dispatch(authSlice.actions.refreshTokenSuccess(response.data))
        } catch (error) {
            dispatch(authSlice.actions.refreshTokenFail())
        }
    } else {
        dispatch(authSlice.actions.refreshTokenFail())
    }
}

export const verifyToken = (token: string, access: boolean, refresh: boolean) => async (dispatch: AppDispatch) => {
    try {
        const body = JSON.stringify({token: token})
        const response = await axios.post(apiUrl + 'auth/jwt/verify/', body, getRequestHeaders());
        if (response.data.code !== 'token_not_valid') {
            access
                ? dispatch(authSlice.actions.verifyAccessTokenSuccess())
                : dispatch(authSlice.actions.verifyAccessTokenFail('token is not valid'))
            refresh
                ?dispatch(authSlice.actions.verifyRefreshTokenSuccess())
                :dispatch(authSlice.actions.verifyRefreshTokenFail('token is not valid'))
        }
    } catch (e) {
        if (access) dispatch(authSlice.actions.verifyAccessTokenFail('token is not valid'))
        if (refresh) dispatch(authSlice.actions.verifyRefreshTokenFail('token is not valid'))
    }
}

