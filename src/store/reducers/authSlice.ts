import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "../../interface/IUser";
import {encodeToken} from "../../hooks/encodeDecodeTokens";
import {IAuthState} from "../../interface/IInitialStates";


const initialState: IAuthState = {
    isAuth: false,
    isSignedUp: false,
    error: '',
    access: '',
    refresh: '',
    lastLogin: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerSuccess(state, action: PayloadAction<boolean>){
            state.isAuth = false;
            state.isSignedUp = action.payload
        },
        registerFail(state, action:PayloadAction<string>){
            state.error = action.payload;
            state.isAuth = false;
            state.isSignedUp = false;
        },
        loginSuccess(state, action:PayloadAction<IAuth>){
            state.isAuth = true;
            state.error = '';
            state.access = action.payload.access;
            state.refresh = action.payload.refresh;
            state.lastLogin = new Date().toString();
            localStorage.setItem('lastLogin', new Date().toString())
            localStorage.setItem('access', encodeToken(action.payload.access));
            localStorage.setItem('refresh', encodeToken(action.payload.refresh));
        },
        loginFail(state, action:PayloadAction<string>){
            state.error = action.payload;
            state.isAuth = false;
            state.lastLogin = ''
            state.access = '';
            state.refresh = '';
            localStorage.removeItem('lastLogin');
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        },

        refreshSuccess(state, action:PayloadAction<IAuth>){
            state.access = action.payload.access;
            state.refresh = action.payload.refresh;
            state.isAuth = true;
            localStorage.setItem('access', encodeToken(action.payload.access));
            localStorage.setItem('refresh', encodeToken(action.payload.refresh));
        },
        refreshFail(state){
            state.access = '';
            state.isAuth = false;
            state.refresh = '';
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        },
        logout(state){
            state.isAuth = false;
            state.error = '';
            state.access = '';
            state.refresh = '';
            state.lastLogin = '';
            localStorage.removeItem('lastLogin');
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        }
    },

})
export default authSlice.reducer;