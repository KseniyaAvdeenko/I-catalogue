import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState = {
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
        // userFetching(state){
        //     state.isLoading = true;
        // },
        // userFetchingSuccess(state, action:PayloadAction<IUser[]>){
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload
        // },
        // userFetchingFail(state, action:PayloadAction<string>){
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
})


export default userSlice.reducer;