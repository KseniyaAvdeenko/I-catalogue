import {AppDispatch} from "../store";
import {productSlice} from "../reducers/productSlice";
import axios from "axios";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {IProd, IProdReadOnly} from "../../interface/IProduct";

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
                JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(productSlice.actions.createProductSuccess(response.data));
            dispatch(loadProducts());
            dispatch(loadProductsRead());
        } catch (e) {
            dispatch(productSlice.actions.createProductFail('Ошибка'))
        }
    } else {
        dispatch(productSlice.actions.createProductFail('Вы не авторизованы'))
    }
}
export const updateProduct = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch<IProd>(apiUrl + `product/products/${id}/`,
                JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(productSlice.actions.updateProductSuccess(response.data));
            dispatch(loadProductRead(id))
        } catch (e) {
            dispatch(productSlice.actions.updateProductFail('Ошибка'))
        }
    } else {
        dispatch(productSlice.actions.updateProductFail('Вы не авторизованы'))
    }
}
export const deleteProduct = (access: string, id: number,) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `product/products_all/${id}/`,
                getAuthConfigApplicationJson(access));
            dispatch(productSlice.actions.deleteProductSuccess());
            dispatch(loadProducts())
            dispatch(loadProductsRead())
        } catch (e) {
            dispatch(productSlice.actions.deleteProductFail('Ошибка'))
        }
    } else {
        dispatch(productSlice.actions.deleteProductFail('Вы не авторизованы'))
    }
}

export const loadProductsRead = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.prodsReadOnlyFetching())
        const response = await axios.get<IProdReadOnly[] | []>(apiUrl + `product/products_all/`, getRequestHeaders())
        dispatch(productSlice.actions.loadProductsReadOnlySuccess(response.data))
    } catch (e) {
        dispatch(productSlice.actions.loadProductsReadOnlyFail('Ошибка'))
    }
}
export const loadProductRead = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.prodReadOnlyFetching())
        const response = await axios.get<IProdReadOnly>(apiUrl + `product/products_all/${id}/`, getRequestHeaders())
        dispatch(productSlice.actions.loadProductReadOnlySuccess(response.data))
    } catch (e) {
        dispatch(productSlice.actions.loadProductReadOnlyFail('Ошибка'))
    }
}