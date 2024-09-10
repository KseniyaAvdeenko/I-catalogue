import {AppDispatch} from "../store";
import {productSlice} from "../reducers/productSlice";
import axios from "axios";
import {apiUrl, getAuthConfigMultipart, getRequestHeaders} from "./apiUrl";
import {IProd} from "../../interface/IProduct";

export const loadProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.prodsFetching())
        const response = await axios.get<IProd[] | []>(apiUrl + `product/products/`, getRequestHeaders())
        dispatch(productSlice.actions.loadProductsSuccess(response.data))
    } catch (e) {
        dispatch(productSlice.actions.loadProductsFail('Ошибка'))
    }
}

export const loadProduct = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.prodFetching())
        const response = await axios.get<IProd>(apiUrl + `product/products/${id}/`, getRequestHeaders())
        dispatch(productSlice.actions.loadProductSuccess(response.data))
    } catch (e) {
        dispatch(productSlice.actions.loadProductFail('Ошибка'))
    }
}

export const createProduct = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post<IProd>(apiUrl + `product/products/`,
                data, getAuthConfigMultipart(access));
            dispatch(productSlice.actions.createProductSuccess(response.data));
            dispatch(loadProducts())
        } catch (e) {
            dispatch(productSlice.actions.createProductFail('Ошибка'))
        }
    }else{
        dispatch(productSlice.actions.createProductFail('Вы не авторизованы'))
    }
}
export const updateProduct = (access: string,id: number,  data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch<IProd>(apiUrl + `product/products/${id}/`,
                data, getAuthConfigMultipart(access));
            dispatch(productSlice.actions.updateProductSuccess(response.data));
        } catch (e) {
            dispatch(productSlice.actions.updateProductFail('Ошибка'))
        }
    }else{
        dispatch(productSlice.actions.updateProductFail('Вы не авторизованы'))
    }
}
export const deleteProduct = (access: string, id: number,) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `/product/products/${id}/`,
                getAuthConfigMultipart(access));
            dispatch(productSlice.actions.deleteProductSuccess());
            dispatch(loadProducts())
        } catch (e) {
            dispatch(productSlice.actions.deleteProductFail('Ошибка'))
        }
    }else{
        dispatch(productSlice.actions.deleteProductFail('Вы не авторизованы'))
    }
}