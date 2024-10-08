import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISeoSettingsInitial} from "../../interface/IInitialStates";
import {ISeoSettings} from "../../interface/ISeoSettings";

const initialState:ISeoSettingsInitial = {
    isLoading: false,
    error: '',
    seoTags: null,
    seoTag: null,
    seoTagError: ''
}

export const seoSettingsSlice = createSlice({
    name: 'seoSettings',
    initialState,
    reducers:{
        fetchingSeoTags(state){
            state.isLoading = true;
        },
        loadSeoTagsSuccess(state, action:PayloadAction<ISeoSettings[]>){
            state.isLoading = false;
            state.seoTags = action.payload
        },
        loadSeoTagsFail(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        createSeoTagSuccess(state, action:PayloadAction<ISeoSettings>){
            state.seoTag = action.payload
        },
        createSeoTagFail(state, action:PayloadAction<string>){
            state.seoTagError = action.payload
        },
        updateSeoTagSuccess(state, action:PayloadAction<ISeoSettings>){
            state.seoTag = action.payload
        },
        updateSeoTagFail(state, action:PayloadAction<string>){
            state.seoTagError = action.payload
        },
        deleteSeoTagSuccess(state){
            state.seoTag = null
        },
        deleteSeoTagFail(state, action:PayloadAction<string>){
            state.seoTagError = action.payload
        },
    }
})

export default seoSettingsSlice.reducer