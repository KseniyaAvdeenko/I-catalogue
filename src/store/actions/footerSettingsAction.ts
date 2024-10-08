import {AppDispatch} from "../store";
import axios from "axios";
import {IFooterSettings} from "../../interface/ICommonSettings";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {footerSettingsSlice} from "../reducers/footerSettingsSlice";
import {errorSlice} from "../reducers/errorSlice";

export const loadFooterSettings = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(footerSettingsSlice.actions.footerSettingsFetching())
        const response = await axios.get<IFooterSettings>(apiUrl + 'common_page_settings/footer_settings/get_footer/', getRequestHeaders())
        dispatch(footerSettingsSlice.actions.loadFooterSettingsSuccess(response.data))
    } catch (e) {
        dispatch(footerSettingsSlice.actions.loadFooterSettingsFail())
        dispatch(errorSlice.actions.loadingDataErrors('Ошибка загрузки настроек "подвала" сайта'))
    }
}

export const updateFooterSettings = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const body = JSON.stringify(data)
            const response = await axios.patch<IFooterSettings>(apiUrl + `common_page_settings/footer_settings/${id}/`, body, getAuthConfigApplicationJson(access))
            dispatch(footerSettingsSlice.actions.updateFooterSettingsSuccess(response.data))
        } catch (e) {
            dispatch(errorSlice.actions.updatingDataErrors('Ошибка обновления настроек "подвала" сайта'))
        }
    } else {
        dispatch(errorSlice.actions.updatingDataErrors('Вы не авторизованы'))
    }
}

export const restoreFooterSettings = (access: string, id: number) => async (dispatch: AppDispatch) => {
        if (access) {
            try {
                const response = await axios.get<boolean>(apiUrl + `common_page_settings/footer_settings/${id}/restore_footer/`, getAuthConfigApplicationJson(access))
                dispatch(footerSettingsSlice.actions.restoreFooterSettingsSuccess(response.data))
                dispatch(loadFooterSettings())
            } catch (e) {
                dispatch(footerSettingsSlice.actions.restoreFooterSettingsFail(false))
                dispatch(errorSlice.actions.updatingDataErrors('Восстановление прошло неудачно'))
            }
        } else {
            dispatch(errorSlice.actions.updatingDataErrors('Вы не авторизованы'))
        }
}