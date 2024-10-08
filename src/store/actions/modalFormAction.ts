import {AppDispatch} from "../store";
import {modalFormSlice} from "../reducers/modalFormSlice";
import axios from "axios";
import {IModalForm} from "../../interface/IModalForm";
import {apiUrl, getAuthConfigApplicationJson} from "./apiUrl";
import {errorSlice} from "../reducers/errorSlice";

export const loadModalFormSettings = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(modalFormSlice.actions.modalFormFetching())
        const response = await axios.get<IModalForm>(apiUrl + `modal_settings/modal_settings/get_order_modal_form/`);
        dispatch(modalFormSlice.actions.loadModalFormSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.loadingDataErrors('Ошибка загрузки настроек модального окна'))
        dispatch(modalFormSlice.actions.loadModalFormFail())
    }
}

export const updateModalFormSettings = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch<IModalForm>(apiUrl + `modal_settings/modal_settings/${id}/`,
                JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(modalFormSlice.actions.updateModalFormSuccess(response.data))
        } catch (e) {
            dispatch(errorSlice.actions.updatingDataErrors('Ошибка обновления настроек модального окна'))
        }
    }
}
export const createModalFormLabel = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        await axios.post(apiUrl + `modal_settings/modal_inputs/`, JSON.stringify(data),
            getAuthConfigApplicationJson(access));
        dispatch(loadModalFormSettings())
    }
}
export const updateModalFormLabel = (access: string,id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        await axios.patch(apiUrl + `modal_settings/modal_inputs/${id}/`, JSON.stringify(data),
            getAuthConfigApplicationJson(access));
        dispatch(loadModalFormSettings())
    }
}
export const deleteModalFormLabel = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
        await axios.delete(apiUrl + `modal_settings/modal_inputs/${id}/`,
            getAuthConfigApplicationJson(access));
        dispatch(loadModalFormSettings())
    }
}
