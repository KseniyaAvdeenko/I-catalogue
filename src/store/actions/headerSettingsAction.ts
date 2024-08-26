import {AppDispatch} from "../store";
import axios from "axios";
import {IHeaderSettings} from "../../interface/ICommonSettings";
import {apiUrl, formData, getAuthConfigApplicationJson} from "./apiUrl";
import {userSlice} from "../reducers/userSlice";
import {headerSettingsSlice} from "../reducers/headerSettingsSlice";



export const loadHeaderSettings = () => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            dispatch(headerSettingsSlice.actions.headerSettingsFetching())
            const response = await axios.get<IHeaderSettings>(apiUrl + 'common_page_settings/header_settings/get_header/', getAuthConfigApplicationJson(localStorage.access))
            dispatch(headerSettingsSlice.actions.loadHeaderSettingsSuccess(response.data))
        } catch (e) {
            dispatch(headerSettingsSlice.actions.loadHeaderSettingsFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const updateHeaderSettings = (id: number, data: any) => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            const body = JSON.stringify(data)
            const response = await axios.patch<IHeaderSettings>(apiUrl + `common_page_settings/header_settings/${id}/`, body, getAuthConfigApplicationJson(localStorage.access))
            dispatch(headerSettingsSlice.actions.updateHeaderSettingsSuccess(response.data))

        } catch (e) {
            dispatch(headerSettingsSlice.actions.updateHeaderSettingsFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}


export const restoreHeaderSettings = (id: number) => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            const response = await axios.get(apiUrl + `common_page_settings/header_settings/${id}/restore_header/`, getAuthConfigApplicationJson(localStorage.access))
            dispatch(headerSettingsSlice.actions.restoreHeaderSettingsSuccess(response.data))
        }catch (e) {
            dispatch(headerSettingsSlice.actions.restoreHeaderSettingsFail(false))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}