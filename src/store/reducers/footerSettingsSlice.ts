import {IFooterSettings} from "../../interface/ICommonSettings";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFooterSettingsInitial} from "../../interface/IInitialStates";

const initialState: IFooterSettingsInitial = {
    isLoading: false,
    footerSettings: null,
    restored: false,
}

export const footerSettingsSlice = createSlice({
    name: 'footerSettings',
    initialState,
    reducers: {
        footerSettingsFetching(state){
            state.isLoading = true;
            state.footerSettings = null;
        },
        loadFooterSettingsSuccess(state, action: PayloadAction<IFooterSettings>){
            state.isLoading = false;
            state.footerSettings = action.payload;
        },
        loadFooterSettingsFail(state){
            state.isLoading = false;
        },
        updateFooterSettingsSuccess(state, action: PayloadAction<IFooterSettings>){
            state.footerSettings = action.payload;
        },
        restoreFooterSettingsSuccess(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
        restoreFooterSettingsFail(state, action: PayloadAction<boolean>){
            state.restored = action.payload;
        },
    }
})

export default footerSettingsSlice.reducer