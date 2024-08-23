import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "../../interface/IAuth";

interface IAuthState extends IAuth{
    isAuth: boolean;
    error: string
}
const initialState: IAuthState = {
    isAuth: false,
    error: '',
    access: '',
    refresh: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action:PayloadAction<IAuth>){
            state.isAuth = true;
            state.error = '';
            state.access = action.payload.access;
            state.refresh = action.payload.refresh;
        },
        loginFail(state, action:PayloadAction<string>){
            state.error = action.payload;
            state.isAuth = false;
        },
        logout(state){
            state.isAuth = false;
            state.error = '';
            state.access = '';
            state.refresh = '';
        }
    },

})
export default authSlice.reducer;