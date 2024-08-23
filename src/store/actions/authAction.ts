import {AppDispatch} from "../store";
import axios from "axios";
import {apiUrl} from "./apiUrl";
import {authSlice} from "../reducers/authSlice";
import {INewUser, INewUserResponse, IUserBase} from "../../interface/IUser";

export const loginUser = (user: IUserBase) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<{access:string, refresh: string}>(apiUrl + 'auth/jwt/create/', user)
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
        const response = await axios.post<INewUserResponse>(apiUrl + 'auth/users/', user)
        //console.log(response.data)
        dispatch(authSlice.actions.registerSuccess())
    } catch (error) {
        dispatch(authSlice.actions.registerFail('Ошибка'))
    }
}

export const refreshToken = (refresh: string) => async (dispatch: AppDispatch) => {
    if (localStorage.refresh) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        }
        const body = JSON.stringify({refresh: localStorage.getItem('refresh')})
        try {
            const response = await axios.post<{ access: string, refresh: string }>(apiUrl + 'auth/jwt/refresh/', body, config)
            //console.log(response.data)
            dispatch(authSlice.actions.refreshSuccess(response.data))
        } catch (error) {
            dispatch(authSlice.actions.refreshFail())
        }
    } else {
        dispatch(authSlice.actions.refreshFail())
    }
}


 //
 // if (localStorage.getItem('access')) {
 //        const config = {
 //            headers: {
 //                'Content-Type': 'application/json',
 //                "Accept": 'application/json',
 //            }
 //        }
 //        const body = JSON.stringify({token: localStorage.getItem('access')})
 //        try {
 //            const response = await axios.post(baseUrl + '/auth/jwt/verify/', body, config);
 //            if (response.data.code !== 'token_not_valid') {
 //                dispatch({type: AUTHENTICATED_SUCCESS})
 //            } else {
 //                dispatch({type: AUTHENTICATED_FAIL});
 //            }
 //        } catch (error) {
 //            dispatch({type: AUTHENTICATED_FAIL});
 //        }
 //    } else {
 //        dispatch({type: AUTHENTICATED_FAIL});
 //    }