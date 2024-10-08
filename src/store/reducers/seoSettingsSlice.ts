import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISeoSettingsInitial} from "../../interface/IInitialStates";
import {ISeoSettings} from "../../interface/ISeoSettings";

const initialState:ISeoSettingsInitial = {
    isLoading: false,
    seoTags: null,
    seoTag: null,
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
        loadSeoTagsFail(state){
            state.isLoading = false;
        },
        createSeoTagSuccess(state, action:PayloadAction<ISeoSettings>){
            state.seoTag = action.payload
        },
        updateSeoTagSuccess(state, action:PayloadAction<ISeoSettings>){
            state.seoTag = action.payload
        },
        deleteSeoTagSuccess(state){
            state.seoTag = null
        },
    }
})

export default seoSettingsSlice.reducer