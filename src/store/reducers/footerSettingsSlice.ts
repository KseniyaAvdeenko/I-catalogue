import {IFooterSettings} from "../../interface/ICommonSettings";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IFooterSettingsInitial{
    isLoading:boolean;
    error: string;
    footerSettings: IFooterSettings | null
    restored: boolean
}

const initialState: IFooterSettingsInitial = {
    isLoading: false,
    error: '',
    footerSettings: null,
    restored: false
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
            state.isLoading = false;
            state.footerSettings = null;
            state.error = action.payload;
        },
        updateFooterSettingsSuccess(state, action: PayloadAction<IFooterSettings>){
            state.isLoading = false;
            state.footerSettings = action.payload;
            state.error = '';
        },
        updateFooterSettingsFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.footerSettings = null;
            state.error = action.payload;
        },
        restoreFooterSettingsSuccess(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
        restoreFooterSettingsFail(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
    }
})

export default footerSettingsSlice.reducer