import {IHeaderSettings} from "../../interface/ICommonSettings";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHeaderSettingsInitial} from "../../interface/IInitialStates";

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
            state.headerSettings = null;
        },
        loadHeaderSettingsSuccess(state, action: PayloadAction<IHeaderSettings>){
            state.isLoading = false;
            state.headerSettings = action.payload;
        },
        loadHeaderSettingsFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        updateHeaderSettingsSuccess(state, action: PayloadAction<IHeaderSettings>){
            state.headerSettings = action.payload;
        },
        updateHeaderSettingsFail(state, action: PayloadAction<string>){
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