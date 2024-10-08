import {IHeaderSettings} from "../../interface/ICommonSettings";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHeaderSettingsInitial} from "../../interface/IInitialStates";

const initialState: IHeaderSettingsInitial = {
    isLoading: false,
    headerSettings: null,
    restored: false,
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
        loadHeaderSettingsFail(state){
            state.isLoading = false;
        },
        updateHeaderSettingsSuccess(state, action: PayloadAction<IHeaderSettings>){
            state.headerSettings = action.payload;
        },
        restoreHeaderSettingsSuccess(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
        restoreHeaderSettingsFail(state, action: PayloadAction<boolean>){
            state.restored = action.payload;
        },
    }
})

export default headerSettingsSlice.reducer;