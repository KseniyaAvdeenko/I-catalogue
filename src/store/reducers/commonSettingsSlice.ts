import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICommonSettings} from "../../interface/ICommonSettings";
import {ICommonSettingsInitial} from "../../interface/IInitialStates";

const initialState: ICommonSettingsInitial = {
    isLoading: false,
    error: '',
    commonSettings: null,
    restored: false
}

export const commonSettingsSlice = createSlice({
    name: 'commonSettings',
    initialState,
    reducers: {
        loadCommonSettingsFetching(state) {
            state.isLoading = true
        },
        loadCommonSettingsSuccess(state, action: PayloadAction<ICommonSettings>) {
            state.commonSettings = action.payload
            state.isLoading = false
        },
        loadCommonSettingsFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        updateCommonSettingsSuccess(state, action: PayloadAction<ICommonSettings>) {
            state.commonSettings = action.payload
        },
        updateCommonSettingsFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        restoreCommonSettingsSuccess(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
        restoreCommonSettingsFail(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
    }
})

export default commonSettingsSlice.reducer