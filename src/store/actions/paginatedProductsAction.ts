import {AppDispatch} from "../store";
import axios from "axios";
import {IProdsByPage} from "../../interface/IProduct";
import {apiUrl} from "./apiUrl";
import {paginatedProductSlice} from "../reducers/paginatedProductSlice";
import {errorSlice} from "../reducers/errorSlice";

export const loadProductsByPage = (pageNum: number|null, pageSize: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(paginatedProductSlice.actions.fetchingPaginatedProds())
        const response = await axios.get<IProdsByPage>(apiUrl + `product/all_products/`,
            {
                params: {page: pageNum ? pageNum: 1, page_size: pageSize}
            })
        dispatch(paginatedProductSlice.actions.loadProdsPaginatedSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.paginatedProductsError('Ошибка загрузки товаров/услуг'))
        dispatch(paginatedProductSlice.actions.loadProdsPaginatedFail())
    }
}

export const changePageSizeAction = (pageNum: number|null, pageSize: number)=> async (dispatch: AppDispatch) =>{
    dispatch(paginatedProductSlice.actions.changePageSizeSuccess(pageSize))
    dispatch(loadProductsByPage(pageNum, pageSize))
}

export const changePageAction = (pageNum: number, pageSize: number)=> async (dispatch: AppDispatch) =>{
    dispatch(paginatedProductSlice.actions.changeCurrentPageSuccess(pageNum))
    dispatch(loadProductsByPage(pageNum, pageSize))
}