import {IButtonSettings, IHeaderSettings} from "../../interface/ICommonSettings";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IButtonSettingsInitial} from "../../interface/IInitialStates";

const initialState: IButtonSettingsInitial = {
    isLoading: false,
    error: '',
    buttonSettings: null,
    restored: false
}

export const buttonSettingsSlice = createSlice({
    name: 'buttonSettings',
    initialState,
    reducers: {
         buttonSettingsFetching(state){
            state.isLoading = true;
        },
        loadButtonSettingsSuccess(state, action: PayloadAction<IButtonSettings>){
            state.isLoading = false;
            state.buttonSettings = action.payload;
            state.error = '';
        },
        loadButtonSettingsFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        updateButtonSettingsSuccess(state, action: PayloadAction<IButtonSettings>){
            state.isLoading = false;
            state.buttonSettings = action.payload;
            state.error = '';
        },
        updateButtonSettingsFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        restoreButtonSettingsSuccess(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
        restoreButtonSettingsFail(state, action: PayloadAction<boolean>){
            state.restored = action.payload
        },
    }
})

export default buttonSettingsSlice.reducer