import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interface/IUser";

interface IUserInitial {
    errorCurrentUser: string;
    errorUsers: string;
    errorUser: string;
    currentUser: IUser|null;
    user: IUser|null;
    users: IUser[]|null;
}

export const initialState:IUserInitial = {
    errorCurrentUser: '',
    errorUsers: '',
    errorUser: '',
    currentUser: null,
    user: null,
    users: null,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loadingCurrentUserSuccess(state, action: PayloadAction<IUser>) {
            state.currentUser = action.payload
        },
        loadingCurrentUserFail(state, action: PayloadAction<string>) {
            state.errorCurrentUser = action.payload
        },
        loadingUsersSuccess(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload
        },
        loadingUsersFail(state, action: PayloadAction<string>) {
            state.errorUsers= action.payload
        },
        loadingUserSuccess(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        loadingUserFail(state, action: PayloadAction<string>) {
            state.errorUser = action.payload
        },
    }
})


export default userSlice.reducer;