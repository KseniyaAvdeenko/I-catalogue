import {IHeaderSettings} from "../../interface/ICommonSettings";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IHeaderSettingsInitial {
    isLoading: boolean;
    error: string;
    headerSettings: IHeaderSettings|null;
    restored: boolean;
}

const initialState: IHeaderSettingsInitial = {
    isLoading: false,
    error: '',
    headerSettings: null,
    restored: false
}

export const headerSettingsSlice = createSlice({
    name: 'headerSettings',
    initialState,
    reducers: {
        headerSettingsFetching(state){
            state.isLoading = true;
            state.error = '';
            state.headerSettings = null;
        },
        loadHeaderSettingsSuccess(state, action: PayloadAction<IHeaderSettings>){
            state.isLoading = false;
            state.headerSettings = action.payload;
            state.error = '';
        },
        loadHeaderSettingsFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.headerSettings = null;
            state.error = action.payload;
        },
        updateHeaderSettingsSuccess(state, action: PayloadAction<IHeaderSettings>){
            state.isLoading = false;
            state.headerSettings = action.payload;
            state.error = '';
        },
        updateHeaderSettingsFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.headerSettings = null;
            state.error = action.payload;
        },
        restoreHeaderSettingsSuccess(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
        restoreHeaderSettingsFail(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
    }
})

export default headerSettingsSlice.reducer;