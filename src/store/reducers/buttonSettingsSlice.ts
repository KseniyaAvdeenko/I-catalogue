import {IButtonSettings} from "../../interface/ICommonSettings";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IButtonSettingsInitial} from "../../interface/IInitialStates";

const initialState: IButtonSettingsInitial = {
    isLoading: false,
    buttonSettings: null,
    restored: false,
}

export const buttonSettingsSlice = createSlice({
    name: 'buttonSettings',
    initialState,
    reducers: {
        buttonSettingsFetching(state) {
            state.isLoading = true;
        },
        loadButtonSettingsSuccess(state, action: PayloadAction<IButtonSettings>) {
            state.isLoading = false;
            state.buttonSettings = action.payload;
        },
        loadButtonSettingsFail(state) {
            state.isLoading = false;
        },
        updateButtonSettingsSuccess(state, action: PayloadAction<IButtonSettings>) {
            state.isLoading = false;
            state.buttonSettings = action.payload;
        },
        updateButtonSettingsFail(state) {
            state.isLoading = false;
        },
        restoreButtonSettingsSuccess(state, action: PayloadAction<boolean>) {
            state.restored = action.payload
        },
        restoreButtonSettingsFail(state, action: PayloadAction<boolean>) {
            state.restored = action.payload;
            },
    }
})

export default buttonSettingsSlice.reducer