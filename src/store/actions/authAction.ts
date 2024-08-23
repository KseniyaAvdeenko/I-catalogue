import {AppDispatch} from "../store";
import axios from "axios";
import {IAuth} from "../../interface/IAuth";
import {apiUrl} from "./apiUrl";
import {authSlice} from "../reducers/authSlice";
import {IUserBase} from "../../interface/IUser";

export const loginUser = (user: IUserBase) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<IAuth>(apiUrl + 'auth/jwt/create/', user)
        console.log(response.data)
        dispatch(authSlice.actions.loginSuccess(response.data))
    } catch (error) {
        dispatch(authSlice.actions.loginFail('Неправильный логин или пароль'))
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.logout())
}