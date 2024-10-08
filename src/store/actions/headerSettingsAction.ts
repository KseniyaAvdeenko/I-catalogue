import {AppDispatch} from "../store";
import axios from "axios";
import {IHeaderSettings} from "../../interface/ICommonSettings";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {headerSettingsSlice} from "../reducers/headerSettingsSlice";


export const loadHeaderSettings = () => async (dispatch: AppDispatch) => {

    try {
        dispatch(headerSettingsSlice.actions.headerSettingsFetching())
        const response = await axios.get<IHeaderSettings>(apiUrl + 'common_page_settings/header_settings/get_header/', getRequestHeaders())
        dispatch(headerSettingsSlice.actions.loadHeaderSettingsSuccess(response.data))
    } catch (e) {
        dispatch(headerSettingsSlice.actions.loadHeaderSettingsFail('Ошибка загрузки настроек "шапки" сайта'))
    }
}

export const updateHeaderSettings = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const body = JSON.stringify(data)
            const response = await axios.patch<IHeaderSettings>(apiUrl + `common_page_settings/header_settings/${id}/`, body, getAuthConfigApplicationJson(access))
            dispatch(headerSettingsSlice.actions.updateHeaderSettingsSuccess(response.data))

        } catch (e) {
            dispatch(headerSettingsSlice.actions.updateHeaderSettingsFail('Ошибка обновления настроек "шапки" сайта'))
        }
    } else {
        dispatch(headerSettingsSlice.actions.updateHeaderSettingsFail('Вы не авторизованы'))
    }
}


export const restoreHeaderSettings = (access: string, id: number, isAdmin: boolean) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.get(apiUrl + `common_page_settings/header_settings/${id}/restore_header/`, getAuthConfigApplicationJson(access))
            dispatch(headerSettingsSlice.actions.restoreHeaderSettingsSuccess(response.data))
        } catch (e) {
            dispatch(headerSettingsSlice.actions.restoreHeaderSettingsFail(false))
        }
    } else {
        dispatch(headerSettingsSlice.actions.updateHeaderSettingsFail('Вы не авторизованы'))
    }

}