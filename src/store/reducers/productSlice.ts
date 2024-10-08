import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProdInitial} from "../../interface/IInitialStates";
import {IProd, IProdReadOnly} from "../../interface/IProduct";

const initialState: IProdInitial = {
    isLoading: false,
    products: null,
    product: null,
    productsReadOnly: null,
    productReadOnly: null,
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        prodsFetching(state) {
            state.isLoading = true;
        },
        loadProductsSuccess(state, action: PayloadAction<IProd[]>) {
            state.isLoading = false;
            state.products = action.payload
        },
        loadProductsFail(state) {
            state.isLoading = false;
        },
        createProductSuccess(state, action: PayloadAction<IProd>) {
            state.product = action.payload;
        },
        updateProductSuccess(state, action: PayloadAction<IProd>) {
            state.product = action.payload;
        },
        deleteProductSuccess(state) {
            state.product = null;
        },
        prodsReadOnlyFetching(state) {
            state.isLoading = true;
        },
        loadProductsReadOnlySuccess(state, action: PayloadAction<IProdReadOnly[]>) {
            state.isLoading = false;
            state.productsReadOnly = action.payload
        },
        loadProductsReadOnlyFail(state) {
            state.isLoading = false;
        },
        prodReadOnlyFetching(state) {
            state.isLoading = false;
            state.isLoading = true;
        },
        loadProductReadOnlySuccess(state, action: PayloadAction<IProdReadOnly>) {
            state.productReadOnly = action.payload;
            state.isLoading = false;
        },
        loadProductReadOnlyFail(state) {
            state.isLoading = false;
        },
    }
})

export default productSlice.reducer;