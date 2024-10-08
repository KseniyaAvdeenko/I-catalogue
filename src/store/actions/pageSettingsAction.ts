import {AppDispatch} from "../store";
import axios from "axios";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {pageSettingsSlice} from "../reducers/pageSettingsSlice";
import {IPageSetting} from "../../interface/IPagesSettings";
import {errorSlice} from "../reducers/errorSlice";

export const loadPagesWithNavLinks = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(pageSettingsSlice.actions.pagesFetching())
        const response = await axios.get<IPageSetting[]>(apiUrl + `page_settings/page_settings/`, getRequestHeaders())
        dispatch(pageSettingsSlice.actions.loadPagesSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.loadingDataErrors('Ошибка загрузки страниц'))
        dispatch(pageSettingsSlice.actions.loadPagesFail())
    }
}

export const loadPageWithNavLink = (slug: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(pageSettingsSlice.actions.pageFetching())
        const response = await axios.get<IPageSetting>(apiUrl + `page_settings/page_settings/${slug}/`, getRequestHeaders())
        dispatch(pageSettingsSlice.actions.loadPageSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.loadingDataErrors('Ошибка загрузки страницы'))
        dispatch(pageSettingsSlice.actions.loadPageFail())
    }
}

export const createPageWithNavLink = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post(apiUrl + `page_settings/page_settings/`, JSON.stringify(data),
                getAuthConfigApplicationJson(access))
            dispatch(pageSettingsSlice.actions.createPageSuccess(response.data))
            dispatch(loadPagesWithNavLinks())
        } catch (e) {
            dispatch(errorSlice.actions.updatingDataErrors('Ошибка создания страницы'))
        }
    } else {
        dispatch(errorSlice.actions.updatingDataErrors('Вы не авторизованы'))
    }
}

export const updatePageWithNavLink = (access: string, slug: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch(apiUrl + `page_settings/page_settings/${slug}/`, JSON.stringify(data),
                getAuthConfigApplicationJson(access))
            dispatch(pageSettingsSlice.actions.updatePageSuccess(response.data))
            dispatch(loadPagesWithNavLinks())
        } catch (e) {
            dispatch(errorSlice.actions.updatingDataErrors('Ошибка обновления страницы'))
        }
    } else {
        dispatch(errorSlice.actions.updatingDataErrors('Вы не авторизованы'))
    }
}

export const deletePageWithNavLink = (access: string, slug: string,) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `page_settings/page_settings/${slug}/`, getAuthConfigApplicationJson(access))
            dispatch(pageSettingsSlice.actions.deletePageSuccess())
            dispatch(loadPagesWithNavLinks())
        } catch (e) {
            dispatch(errorSlice.actions.updatingDataErrors('Ошибка удаления страницы'))
        }
    } else {
        dispatch(errorSlice.actions.updatingDataErrors('Вы не авторизованы'))
    }
}