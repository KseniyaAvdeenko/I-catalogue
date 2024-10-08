import {AppDispatch} from "../store";
import {commonSettingsSlice} from "../reducers/commonSettingsSlice";
import axios from "axios";
import {ICommonSettings} from "../../interface/ICommonSettings";
import {apiUrl, clearFormData, createFormData, formData, getAuthConfigMultipart, getRequestHeaders} from "./apiUrl";
import {errorSlice} from "../reducers/errorSlice";

export const loadCommonSettings = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(commonSettingsSlice.actions.loadCommonSettingsFetching());
        const response = await axios.get<ICommonSettings>(apiUrl + `common_page_settings/common_page_settings/get_common_settings/`, getRequestHeaders());
        dispatch(commonSettingsSlice.actions.loadCommonSettingsSuccess(response.data));
    } catch {
        dispatch(errorSlice.actions.loadingDataErrors('Ошибка загрузки общих настроек сайта'));
    }
}

export const updateCommonSettings = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch<ICommonSettings>(apiUrl + `common_page_settings/common_page_settings/${id}/`, createFormData(data), getAuthConfigMultipart(access));
            dispatch(commonSettingsSlice.actions.updateCommonSettingsSuccess(response.data));
            clearFormData(data)
        } catch {
            dispatch(errorSlice.actions.updatingDataErrors('Ошибка обновления общих настроек сайта'));
        }
    } else {
        dispatch(errorSlice.actions.updatingDataErrors('Вы не авторизованы'))
    }
}

export const restoreCommonSettings = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.get<boolean>(apiUrl + `common_page_settings/common_page_settings/${id}/restore_common_settings/`, getAuthConfigMultipart(access));
            dispatch(commonSettingsSlice.actions.restoreCommonSettingsSuccess(response.data));
        } catch {
            dispatch(errorSlice.actions.updatingDataErrors('Восстановление прошло неудачно'))
            dispatch(commonSettingsSlice.actions.restoreCommonSettingsFail(false));
        }
    } else {
        dispatch(errorSlice.actions.updatingDataErrors('Вы не авторизованы'))
    }
}