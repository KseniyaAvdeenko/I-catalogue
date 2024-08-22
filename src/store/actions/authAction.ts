import {AppDispatch} from "../store";
import axios from "axios";
import {IAuth} from "../../interface/IAuth";
import {apiUrl} from "./apiUrl";
import {authSlice} from "../reducers/authSlice";

export const loginUser = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IAuth[]>(apiUrl + 'auth/jwt/create/')
        console.log(response.data)
        dispatch(authSlice.actions.loginSuccess(response.data))
    } catch (error) {
        console.log(error)
        dispatch(authSlice.actions.loginFail('error'))
    }
}