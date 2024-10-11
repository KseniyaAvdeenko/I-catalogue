import {AppDispatch} from "../store";
import {orderSlice} from "../reducers/orderSlice";
import axios from "axios";
import {INewOrder, INewOrderBase, IOrder, IOrderStats, IPayment} from "../../interface/IOrder";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {IPaymentData} from "../../interface/IInitialStates";
import {errorSlice} from '../reducers/errorSlice'
import {decodeToken} from "../../hooks/encodeDecodeTokens";

export const loadOrders = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(orderSlice.actions.ordersFetching())
        const response = await axios.get<IOrder[]>(apiUrl + 'order/order/', getRequestHeaders());
        dispatch(orderSlice.actions.loadOrdersSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.oderLoadingError('Ошибка загрузки заказов'))
        dispatch(orderSlice.actions.loadOrdersFail())
    }
}

export const createOrder = (data: INewOrderBase) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<INewOrder>(apiUrl + 'order/new_order/', JSON.stringify(data), getRequestHeaders());
        dispatch(loadOrders())
        dispatch(orderSlice.actions.createNewOrderSuccess(response.data))
        dispatch(startPayment(response.data.total_price, response.data.id, response.data.currency))
    } catch (e) {
        dispatch(errorSlice.actions.orderErrors('Ошибка создания нового заказа'))
        dispatch(orderSlice.actions.createNewOrderFail())
    }
}

export const updateOrder = (id: number, data: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.patch<INewOrder>(apiUrl + `order/new_order/${id}/`, JSON.stringify(data), getRequestHeaders());
        dispatch(loadOrders())
        dispatch(orderSlice.actions.updateNewOrderSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.orderErrors('Ошибка обновления заказа'))
    }
}
export const startPayment = (totalSum: number, orderId: number, currency: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<IPaymentData>(
            apiUrl + `order/create_payment/${totalSum}/${orderId}/${currency}/`, getRequestHeaders());
        dispatch(loadOrders())
        dispatch(orderSlice.actions.newOrderPaymentSuccess(response.data))
        window.open(response.data.confirmation_url, '_blank')
    } catch (e) {
        dispatch(errorSlice.actions.orderErrors('Ошибка оплаты заказа'))
    }
}
export const editPayment = (id: number, data: any) => async (dispatch: AppDispatch) => {
    try {
        await axios.patch<IPayment>(
            apiUrl + `order/payment/${id}/`, JSON.stringify(data), getRequestHeaders());
        dispatch(loadOrders())
    } catch (e) {
        dispatch(errorSlice.actions.orderErrors('Ошибка обновления оплаты заказа'))
    }
}
export const checkPayment = (youkassaId: string, orderId: number, paymentId: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<{ id: string; status: string }>(apiUrl + `order/payment_info/${youkassaId}/`, getRequestHeaders())
        if (response.data.status === 'succeeded') {
            dispatch(editPayment(paymentId, {status: 'succeeded'}))
            dispatch(updateOrder(orderId, {paid: true}))
            dispatch(orderSlice.actions.paymentPaidSuccess())
            setTimeout(() => {
                dispatch(orderSlice.actions.destroyNewOrderAfterSuccessfulPayment())
            }, 4000)
        }
        if (response.data.status === 'canceled') dispatch(editPayment(paymentId, {status: 'canceled'}))
    } catch (e) {
        dispatch(errorSlice.actions.orderErrors('Ошибка проверки оплаты заказа'))
    }
}

export const loadOrderStats = (access: string) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.get(apiUrl + `order/orders_stats/`, getAuthConfigApplicationJson(access));
            dispatch(orderSlice.actions.loadOrdersStatsSuccess(response.data))
        } catch (e) {
            dispatch(errorSlice.actions.oderLoadingError('Ошибка загрузки статистики по заказам'))
        }
    }
}