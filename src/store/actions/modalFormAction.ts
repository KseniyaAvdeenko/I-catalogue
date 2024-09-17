import {AppDispatch} from "../store";
import {modalFormSlice} from "../reducers/modalFormSlice";
import axios from "axios";
import {IModalForm} from "../../interface/IModalForm";
import {apiUrl, getAuthConfigApplicationJson} from "./apiUrl";


export const loadModalFormSettings = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(modalFormSlice.actions.modalFormFetching())
        const response = await axios.get<IModalForm>(apiUrl + `modal_settings/modal_settings/get_order_modal_form/`);
        dispatch(modalFormSlice.actions.loadModalFormSuccess(response.data))
    } catch (e) {
        dispatch(modalFormSlice.actions.loadModalFormFail('Ошибка'))
    }
}

export const updateModalFormSettings = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch<IModalForm>(apiUrl + `modal_settings/modal_settings/${id}/`,
                JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(modalFormSlice.actions.updateModalFormSuccess(response.data))
        } catch (e) {
            dispatch(modalFormSlice.actions.updateModalFormFail('Ошибка'))
        }
    }
}

export const deleteModalFormLabel = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
            await axios.delete(apiUrl + `modal_settings/modal_inputs/${id}/`,
                getAuthConfigApplicationJson(access));
            dispatch(loadModalFormSettings())
    }
}
