import {AppDispatch} from "../store";
import axios from "axios";
import {apiUrl, getRequestHeaders} from "./apiUrl";
import {authSlice} from "../reducers/authSlice";
import {IAuth, INewUser, INewUserResponse, IUserBase} from "../../interface/IUser";


export const loginUser = (user: IUserBase) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<IAuth>(apiUrl + 'auth/jwt/create/', user)
        dispatch(authSlice.actions.loginSuccess(response.data))
    } catch (error) {
        dispatch(authSlice.actions.loginFail('Неправильный логин или пароль'))
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.logout())
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
            const response = await axios.post<{access: string}>(apiUrl + 'auth/jwt/refresh/', body, getRequestHeaders())
            dispatch(authSlice.actions.refreshTokenSuccess(response.data))
        } catch (error) {
            dispatch(authSlice.actions.refreshTokenFail())
        }
    } else {
        dispatch(authSlice.actions.refreshTokenFail())
    }
}

export const verifyToken = async (token: string) => {
    const body = JSON.stringify({token: token})
    const response = await axios.post(apiUrl + 'auth/jwt/verify/', body, getRequestHeaders());
    return response.data.code !== 'token_not_valid';
}
