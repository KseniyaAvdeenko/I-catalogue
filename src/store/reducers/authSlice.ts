import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAuthState {
    isSignedUp: boolean;
    isAuth: boolean;
    error: string;
    refresh: string;
    access: string
}
const initialState: IAuthState = {
    isAuth: false,
    isSignedUp: false,
    error: '',
    access: localStorage.access || '',
    refresh: localStorage.refresh || ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerSuccess(state){
            state.isAuth = false;
            state.isSignedUp = true
        },
        registerFail(state, action:PayloadAction<string>){
            state.error = action.payload;
            state.isAuth = false;
            state.isSignedUp = false;
        },
        loginSuccess(state, action:PayloadAction<{access:string, refresh: string}>){
            state.isAuth = true;
            state.error = '';
            state.access = action.payload.access;
            state.refresh = action.payload.refresh;
            localStorage.setItem('access', action.payload.access);
            localStorage.setItem('refresh', action.payload.refresh);
        },
        loginFail(state, action:PayloadAction<string>){
            state.error = action.payload;
            state.isAuth = false;
        },
        refreshSuccess(state, action:PayloadAction<{access:string, refresh: string}>){
            state.access = action.payload.access;
            state.refresh = action.payload.refresh;
            localStorage.setItem('access', action.payload.access);
            localStorage.setItem('refresh', action.payload.refresh);
        },
        refreshFail(state){
            state.access = '';
            state.refresh = '';
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        },
        logout(state){
            state.isAuth = false;
            state.error = '';
            state.access = '';
            state.refresh = '';
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        }
    },

})
export default authSlice.reducer;