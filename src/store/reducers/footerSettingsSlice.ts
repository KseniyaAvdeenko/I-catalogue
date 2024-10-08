import {IFooterSettings} from "../../interface/ICommonSettings";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFooterSettingsInitial} from "../../interface/IInitialStates";

const initialState: IFooterSettingsInitial = {
    isLoading: false,
    error: '',
    footerSettings: null,
    restored: false,
    updatingError: ''
}

export const footerSettingsSlice = createSlice({
    name: 'footerSettings',
    initialState,
    reducers: {
        footerSettingsFetching(state){
            state.isLoading = true;
            state.error = '';
            state.footerSettings = null;
        },
        loadFooterSettingsSuccess(state, action: PayloadAction<IFooterSettings>){
            state.isLoading = false;
            state.footerSettings = action.payload;
            state.error = '';
        },
        loadFooterSettingsFail(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        },
        updateFooterSettingsSuccess(state, action: PayloadAction<IFooterSettings>){
            state.footerSettings = action.payload;
        },
        updateFooterSettingsFail(state, action: PayloadAction<string>){
            state.updatingError = action.payload;
        },
        restoreFooterSettingsSuccess(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
        restoreFooterSettingsFail(state, action: PayloadAction<boolean>){
            state.restored = action.payload;
            state.updatingError = 'Восстановление прошло неудачно'
        },
    }
})

export default footerSettingsSlice.reducer