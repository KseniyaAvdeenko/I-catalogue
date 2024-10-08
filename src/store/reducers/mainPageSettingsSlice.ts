import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMainPageSetting} from "../../interface/IPagesSettings";
import {IMainPageSettingsInitial} from "../../interface/IInitialStates";

const initialState: IMainPageSettingsInitial = {
    isLoading: false,
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
        loadMainPageFail(state) {
            state.mainPageSettings = null;
        },
        updateMainPageSuccess(state, action: PayloadAction<IMainPageSetting>) {
            state.mainPageSettings = action.payload;
        },
    }
})

export default mainPageSettingsSlice.reducer