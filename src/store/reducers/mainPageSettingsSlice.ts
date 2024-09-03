import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMainPageSetting} from "../../interface/IPagesSettings";
import {IMainPageSettingsInitial} from "../../interface/IInitialStates";

const initialState: IMainPageSettingsInitial = {
    isLoading: false,
    error: '',
    mainPageSettings: null,
}

export const mainPageSettingsSlice = createSlice({
    name: 'mainPageSettings',
    initialState,
    reducers: {
        mainPageFetching(state) {
            state.isLoading = true;
        },
        loadMainPageSuccess(state, action: PayloadAction<IMainPageSetting>) {
            state.isLoading = false;
            state.mainPageSettings = action.payload;
        },
        loadMainPageFail(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.mainPageSettings = null;
        },
        updateMainPageSuccess(state, action: PayloadAction<IMainPageSetting>) {
            state.mainPageSettings = action.payload;
        },
        updateMainPageFail(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    }
})

export default mainPageSettingsSlice.reducer