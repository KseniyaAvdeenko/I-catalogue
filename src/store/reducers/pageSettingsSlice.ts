import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPageSettingsInitial} from "../../interface/IInitialStates";
import {IPageSetting} from "../../interface/IPagesSettings";

const initialState: IPageSettingsInitial = {
    isLoading: false,
    pages: null,
    page: null,
}

export const pageSettingsSlice = createSlice({
    name: 'pagesSettings',
    initialState,
    reducers: {
        pagesFetching(state) {
            state.isLoading = true
        },
        loadPagesSuccess(state, action: PayloadAction<IPageSetting[]>) {
            state.isLoading = false
            state.pages = action.payload
        },
        loadPagesFail(state) {
            state.isLoading = false
        },
        pageFetching(state) {
            state.isLoading = true
        },
        loadPageSuccess(state, action: PayloadAction<IPageSetting>) {
            state.isLoading = false
            state.page = action.payload
        },
        loadPageFail(state) {
            state.isLoading = false
        },
        createPageSuccess(state, action: PayloadAction<IPageSetting>) {
            state.page = action.payload
        },

        updatePageSuccess(state, action: PayloadAction<IPageSetting>) {
            state.page = action.payload
        },
        deletePageSuccess(state) {
            state.page = null
        },
    }
})

export default pageSettingsSlice.reducer