import {AppDispatch} from "../store";
import {orderSlice} from "../reducers/orderSlice";
import axios from "axios";
import {INewOrder, INewOrderBase, IOrder, IPayment, IPaymentBase} from "../../interface/IOrder";
import {apiUrl, getRequestHeaders} from "./apiUrl";
import {encodeToken} from "../../hooks/encodeDecodeTokens";

export const loadOrders = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(orderSlice.actions.ordersFetching())
        const response = await axios.get<IOrder[]>(apiUrl + 'order/order/', getRequestHeaders());
        dispatch(orderSlice.actions.loadOrdersSuccess(response.data))
    } catch (e) {
        dispatch(orderSlice.actions.loadOrdersFail('Error'))
    }
}

export const loadOrder = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(orderSlice.actions.orderFetching())
        const response = await axios.get<IOrder>(apiUrl + `order/order/${id}/`, getRequestHeaders());
        dispatch(orderSlice.actions.loadOrderSuccess(response.data))
    } catch (e) {
        dispatch(orderSlice.actions.loadOrderFail('Error'))
    }
}

export const createOrder = (data: INewOrderBase) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<INewOrder>(apiUrl + 'order/new_order/', JSON.stringify(data), getRequestHeaders());
        dispatch(loadOrders())
        dispatch(loadOrder(response.data.id))
        dispatch(startPayment(response.data.total_price, response.data.id, response.data.currency))
    } catch (e) {
        console.log(e)
        dispatch(orderSlice.actions.createNewOrderFail('create new order error'))
    }
}
export const updateOrder = (id: number, data: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.patch<INewOrder>(apiUrl + `order/new_order/${id}/`, JSON.stringify(data), getRequestHeaders());
        dispatch(loadOrders())
        dispatch(loadOrder(response.data.id))
    } catch (e) {
        console.log(e)
        dispatch(orderSlice.actions.updateNewOrderFail('update order error'))
    }
}
export const startPayment = (totalSum: number, orderId: number, currency: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<{ confirmation_url: string; paymentId: number; youkassaPaymentId: string; orderId: number; }>(
            apiUrl + `order/create_payment/${totalSum}/${orderId}/${currency}/`, getRequestHeaders());
        dispatch(loadOrders())
        dispatch(loadOrder(response.data.orderId))
        localStorage.setItem('orderId', String(orderId))
        localStorage.setItem('youkassaPaymentId', encodeToken(response.data.youkassaPaymentId))
        localStorage.setItem('paymentId', String(response.data.paymentId))
        window.open(response.data.confirmation_url, '_blank')
    } catch (e) {
        console.log(e)
        dispatch(orderSlice.actions.newOrderPaymentFail('payment error'))
    }
}
export const editPayment = (id: number, data: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.patch<IPayment>(
            apiUrl + `order/payment/${id}/`, JSON.stringify(data), getRequestHeaders());
        dispatch(loadOrders())
        dispatch(loadOrder(response.data.order))
    } catch (e) {
        dispatch(orderSlice.actions.newOrderPaymentFail('payment error'))
    }
}
export const checkPayment = (youkassaId: string, orderId: number, paymentId: number ) => async (dispatch: AppDispatch) => {
    try{
        const response = await axios.get<{ id: string; status: string }>(apiUrl + `order/payment_info/${youkassaId}/`, getRequestHeaders())
        if (response.data.status === 'succeeded') {
            dispatch(editPayment(paymentId, {status: 'succeeded'}))
            dispatch(updateOrder(orderId, {paid: true}))
            dispatch(orderSlice.actions.destroyNewOrderAfterSuccessfulPayment())
        }
        if (response.data.status === 'canceled') dispatch(editPayment(paymentId, {status: 'canceled'}))
    }catch (e) {
        console.log(e)
        dispatch(orderSlice.actions.newOrderPaymentFail('payment checking error'))
    }
}
