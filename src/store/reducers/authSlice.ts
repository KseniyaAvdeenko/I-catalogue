import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "../../interface/IUser";
import {encodeToken} from "../../hooks/encodeDecodeTokens";
import {IAuthState} from "../../interface/IInitialStates";

const hour = 3600000
const day = hour * 24

const initialState: IAuthState = {
    isAuth: Boolean(localStorage.isAuth) ?? false,
    isSignedUp: false,
    error: '',
    access: localStorage.access ?? '',
    refresh: localStorage.refresh ?? '',
    accessExpires: localStorage.accessExpires ?? '',
    refreshExpires: localStorage.refreshExpires ?? '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerSuccess(state, action: PayloadAction<boolean>) {
            state.isAuth = false;
            state.isSignedUp = action.payload
            localStorage.setItem('isAuth', String(false))
        },
        registerFail(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isAuth = false;
            state.isSignedUp = false;
            localStorage.setItem('isAuth', String(false))
        },
        loginSuccess(state, action: PayloadAction<IAuth>) {
            state.isAuth = true;
            state.error = '';
            state.access = action.payload.access;
            state.refresh = action.payload.refresh;
            state.accessExpires = String(Date.now() + hour);
            state.refreshExpires = String(Date.now() + day);
            localStorage.setItem('accessExpires', String(Date.now() + hour))
            localStorage.setItem('refreshExpires', String(Date.now() + day))
            localStorage.setItem('access', encodeToken(action.payload.access));
            localStorage.setItem('refresh', encodeToken(action.payload.refresh));
             localStorage.setItem('isAuth', String(true))
        },
        loginFail(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isAuth = false;
            localStorage.setItem('isAuth', String(false))
        },

        refreshTokenSuccess(state, action: PayloadAction<{ access: string }>) {
            state.access = action.payload.access;
            state.isAuth = true;
            state.accessExpires = String(Date.now() + hour);
            localStorage.setItem('access', encodeToken(action.payload.access));
            localStorage.setItem('accessExpires', String(Date.now() + hour));
            localStorage.setItem('isAuth', String(true))
        },
        refreshTokenFail(state) {
            state.access = '';
            state.isAuth = false;
            state.accessExpires = ''
            localStorage.removeItem('access');
            localStorage.removeItem('accessExpires');
            localStorage.setItem('isAuth', String(false))
        },
        logout(state) {
            state.isAuth = false;
            state.error = '';
            state.access = '';
            state.refresh = '';
            state.accessExpires = '';
            state.refreshExpires = ''
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('accessExpires')
            localStorage.removeItem('refreshExpires')
            localStorage.setItem('isAuth', String(false))
        }
    },
})
export default authSlice.reducer;