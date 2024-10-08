import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interface/IUser";
import {IUserInitial} from "../../interface/IInitialStates";

export const initialState: IUserInitial = {
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
            state.currentUser = null
        },
        loadingUsersSuccess(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload
        },
        loadingUsersFail(state, action: PayloadAction<string>) {
            state.errorUsers = action.payload
        },
    }
})


export default userSlice.reducer;