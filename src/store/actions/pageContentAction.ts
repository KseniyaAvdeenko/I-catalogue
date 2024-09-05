import {AppDispatch} from "../store";
import axios from "axios";
import {IPageContent} from "../../interface/IPagesSettings";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {userSlice} from "../reducers/userSlice";
import {pageContentSlice} from "../reducers/pageContentSlice";

export const loadPageContentsByParams = (pageId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(pageContentSlice.actions.pageContentsFetching())
        const response = await axios.get<IPageContent[]>(apiUrl + `page_settings/page_content/?page=${pageId}`, getRequestHeaders())
        dispatch(pageContentSlice.actions.loadPageContentsSuccess(response.data))
    } catch (e) {
        dispatch(pageContentSlice.actions.loadPageContentsFail('Ошибка'))
    }
}

export const loadPageContent = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(pageContentSlice.actions.pageContentFetching())
        const response = await axios.get<IPageContent>(apiUrl + `page_settings/page_content/${id}/`, getRequestHeaders())
        dispatch(pageContentSlice.actions.loadPageContentSuccess(response.data))
    } catch (e) {
        dispatch(pageContentSlice.actions.loadPageContentFail('Ошибка'))
    }
}
export const createPageContent = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post<IPageContent>(apiUrl + `page_settings/page_content/`, JSON.stringify(data),
                getAuthConfigApplicationJson(access))
            dispatch(pageContentSlice.actions.createPageContentSuccess(response.data))
        } catch (e) {
            dispatch(pageContentSlice.actions.createPageContentFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const updatePageContent = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch(apiUrl + `page_settings/page_content/${id}/`, JSON.stringify(data),
                getAuthConfigApplicationJson(access))
            dispatch(pageContentSlice.actions.updatePageContentSuccess(response.data))
        } catch (e) {
            dispatch(pageContentSlice.actions.updatePageContentFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const deletePageContent = (access: string, id: number, pageId: number) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `page_settings/page_content/{id}/`, getAuthConfigApplicationJson(access))
            dispatch(pageContentSlice.actions.deletePageContentSuccess())
            dispatch(loadPageContentsByParams(pageId))
        } catch (e) {
            dispatch(pageContentSlice.actions.deletePageContentFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}