import {seoSettingsSlice} from "../reducers/seoSettingsSlice";
import {AppDispatch} from "../store";
import axios from "axios";
import {ISeoSettings} from "../../interface/ISeoSettings";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";

export const loadSeoTags = () => async (dispatch: AppDispatch)=>{
    try {
        dispatch(seoSettingsSlice.actions.fetchingSeoTags())
        const response = await axios.get<ISeoSettings[]>(apiUrl + `common_page_settings/seo_settings/`, getRequestHeaders())
        dispatch(seoSettingsSlice.actions.loadSeoTagsSuccess(response.data))
    }catch (e) {
        dispatch(seoSettingsSlice.actions.loadSeoTagsFail('loading seo tags error'))
    }
}

export const createSeoTag = (access: string, data: any) => async (dispatch: AppDispatch)=>{
    if(access){
        try {
            const response = await axios.post<ISeoSettings>(apiUrl + `common_page_settings/seo_settings/`, JSON.stringify(data), getAuthConfigApplicationJson(access))
            dispatch(seoSettingsSlice.actions.createSeoTagSuccess(response.data))
            dispatch(loadSeoTags())
        } catch (e) {
            dispatch(seoSettingsSlice.actions.createSeoTagFail('creating seo tag error'))
        }
    }else{
        dispatch(seoSettingsSlice.actions.createSeoTagFail('you are not logged in'))
    }
}

export const updateSeoTag = (id: number, access: string, data: any) => async (dispatch: AppDispatch)=>{
    if(access){
        try {
            const response = await axios.patch<ISeoSettings>(apiUrl + `common_page_settings/seo_settings/${id}/`, JSON.stringify(data), getAuthConfigApplicationJson(access))
            dispatch(seoSettingsSlice.actions.updateSeoTagSuccess(response.data))
            dispatch(loadSeoTags())
        } catch (e) {
            dispatch(seoSettingsSlice.actions.updateSeoTagFail('updating seo tag error'))
        }
    }else{
        dispatch(seoSettingsSlice.actions.updateSeoTagFail('you are not logged in'))
    }
}

export const deleteSeoTag = (id: number, access: string) => async (dispatch: AppDispatch)=>{
     if(access){
        try {
            await axios.delete(apiUrl + `common_page_settings/seo_settings/${id}/`, getAuthConfigApplicationJson(access))
            dispatch(seoSettingsSlice.actions.deleteSeoTagSuccess())
            dispatch(loadSeoTags())
        } catch (e) {
            dispatch(seoSettingsSlice.actions.deleteSeoTagFail('deleting seo tag error'))
        }
    }else{
        dispatch(seoSettingsSlice.actions.deleteSeoTagFail('you are not logged in'))
    }
}