import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPageSettingsInitial} from "../../interface/IInitialStates";
import {IPageSetting} from "../../interface/IPagesSettings";

const initialState: IPageSettingsInitial = {
    isLoading: false,
    error: '',
    pages: null,
    page: null
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
        loadPagesFail(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        pageFetching(state) {
            state.isLoading = true
        },
        loadPageSuccess(state, action: PayloadAction<IPageSetting>) {
            state.isLoading = false
            state.page = action.payload
        },
        loadPageFail(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        createPageSuccess(state, action: PayloadAction<IPageSetting>) {
            state.page = action.payload
        },
        createPageFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        updatePageSuccess(state, action: PayloadAction<IPageSetting>) {
            state.page = action.payload
        },
        updatePageFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        deletePageSuccess(state) {
            state.page = null
        },
        deletePageFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
    }
})

export default pageSettingsSlice.reducer