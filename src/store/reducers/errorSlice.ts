import {IErrorsInitial} from "../../interface/IInitialStates";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IErrorsInitial = {
    siteErrors: [],
    adminErrors: []
}

export const errorSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        authErrors(state, action: PayloadAction<string>) {
            if (!state.adminErrors.includes(action.payload)) state.adminErrors.push(action.payload)
        },
        usersErrors(state, action: PayloadAction<string>) {
            if (!state.adminErrors.includes(action.payload)) state.adminErrors.push(action.payload)
        },
        loadingDataErrors(state, action: PayloadAction<string>) {
            if (!state.adminErrors.includes(action.payload)) state.adminErrors.push(action.payload)
            if (!state.siteErrors.includes(action.payload)) state.siteErrors.push(action.payload)
        },
        updatingDataErrors(state, action: PayloadAction<string>) {
            if (!state.adminErrors.includes(action.payload)) state.adminErrors.push(action.payload)
        },
        paginatedProductsError(state, action: PayloadAction<string>) {
            if (!state.siteErrors.includes(action.payload)) state.siteErrors.push(action.payload)
        },
        prodErrors(state, action: PayloadAction<string>) {
            if (!state.adminErrors.includes(action.payload)) state.adminErrors.push(action.payload)
        },
        oderLoadingError(state, action: PayloadAction<string>) {
            if (!state.adminErrors.includes(action.payload)) state.adminErrors.push(action.payload)
        },
        orderErrors(state, action: PayloadAction<string>) {
            if (!state.siteErrors.includes(action.payload)) state.siteErrors.push(action.payload)
        },
        clearAdminErrors(state) {
            state.adminErrors = [];
        },
        clearSiteErrors(state) {
            state.siteErrors = [];
        }
    }
})

export default errorSlice.reducer