import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrderInitial} from "../../interface/IInitialStates";
import {IOrder} from "../../interface/IOrder";


const initialState: IOrderInitial = {
    isLoading: false,
    error: '',
    orders: null,
    currentOrder: null,
    currentOrderError: '',
    paymentError: ''
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        ordersFetching(state){
            state.isLoading = true;
        },
        loadOrdersSuccess(state, action: PayloadAction<IOrder[]>){
            state.isLoading = false;
            state.orders = action.payload
        },
        loadOrdersFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        orderFetching(state){
            state.isLoading = true;
        },
        loadOrderSuccess(state, action: PayloadAction<IOrder>){
            state.isLoading = false;
            state.currentOrder = action.payload
        },
        loadOrderFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.currentOrderError = action.payload
        },
        createNewOrderFail(state, action: PayloadAction<string>){
            state.currentOrderError = action.payload
        },
        updateNewOrderFail(state, action: PayloadAction<string>){
            state.currentOrderError = action.payload
        },
        newOrderPaymentFail(state, action: PayloadAction<string>){
            state.currentOrderError = action.payload
        },
        destroyNewOrderAfterSuccessfulPayment(state){
            state.currentOrder = null
            state.currentOrderError = ''
            state.paymentError = ''
        }
    }
})

export default orderSlice.reducer