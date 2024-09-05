import {IPageContentInitial} from "../../interface/IInitialStates";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPageContent, IPageSetting} from "../../interface/IPagesSettings";

const initialState: IPageContentInitial ={
    isLoading: false,
    error: '',
    pageContent: null,
    pageContents: null
}

export const pageContentSlice = createSlice({
    name: 'pageContent',
    initialState,
    reducers: {
        pageContentsFetching(state) {
            state.isLoading = true
        },
        loadPageContentsSuccess(state, action: PayloadAction<IPageContent[]>) {
            state.isLoading = false
            state.pageContents = action.payload
        },
        loadPageContentsFail(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        pageContentFetching(state) {
            state.isLoading = true
        },
        loadPageContentSuccess(state, action: PayloadAction<IPageContent>) {
            state.isLoading = false
            state.pageContent = action.payload
        },
        loadPageContentFail(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        createPageContentSuccess(state, action: PayloadAction<IPageContent>) {
            state.pageContent = action.payload
        },
        createPageContentFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        updatePageContentSuccess(state, action: PayloadAction<IPageContent>) {
            state.pageContent = action.payload
        },
        updatePageContentFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        deletePageContentSuccess(state) {
            state.pageContent = null
        },
        deletePageContentFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        }
    }
})

export default pageContentSlice.reducer