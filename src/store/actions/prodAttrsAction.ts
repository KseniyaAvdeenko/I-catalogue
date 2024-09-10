import {AppDispatch} from "../store";
import {prodAttributesSlice} from "../reducers/prodAttributesSlice";
import {IProdAttrs} from "../../interface/IProduct";
import axios from "axios";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";

export const loadProdAttributes = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(prodAttributesSlice.actions.prodAttrsFetching());
        const response = await axios.get<IProdAttrs[]>(apiUrl + `product/prod_attributes/`, getRequestHeaders());
        dispatch(prodAttributesSlice.actions.loadProdAttrsSuccess(response.data))
    } catch (e) {
        dispatch(prodAttributesSlice.actions.loadProdAttrsFail('Ошибка'));
    }
}

export const loadProdAttribute = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(prodAttributesSlice.actions.prodAttrFetching());
        const response = await axios.get<IProdAttrs>(apiUrl + `product/prod_attributes/${id}/`, getRequestHeaders());
        dispatch(prodAttributesSlice.actions.loadProdAttrSuccess(response.data))
    } catch (e) {
        dispatch(prodAttributesSlice.actions.loadProdAttrFail('Ошибка'));
    }
}

export const createProdAttribute = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post<IProdAttrs>(apiUrl + `product/prod_attributes/`,
                JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(prodAttributesSlice.actions.createProdAttrSuccess(response.data))
            dispatch(loadProdAttributes())
        } catch (e) {
            dispatch(prodAttributesSlice.actions.createProdAttrFail('Ошибка'))
        }
    } else {
        dispatch(prodAttributesSlice.actions.createProdAttrFail('Вы не авторизованы'))
    }
}

export const updateProdAttribute = (access: string,id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch<IProdAttrs>(apiUrl + `product/prod_attributes/${id}/`,
                JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(prodAttributesSlice.actions.updateProdAttrSuccess(response.data))
        } catch (e) {
            dispatch(prodAttributesSlice.actions.updateProdAttrFail('Ошибка'))
        }
    } else {
        dispatch(prodAttributesSlice.actions.updateProdAttrFail('Вы не авторизованы'))
    }
}
export const deleteProdAttribute = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete<IProdAttrs>(apiUrl + `product/prod_attributes/`,
                getAuthConfigApplicationJson(access));
            dispatch(prodAttributesSlice.actions.deleteProdAttrSuccess());
            dispatch(loadProdAttributes())
        } catch (e) {
            dispatch(prodAttributesSlice.actions.deleteProdAttrFail('Ошибка'))
        }
    } else {
        dispatch(prodAttributesSlice.actions.deleteProdAttrFail('Вы не авторизованы'))
    }
}