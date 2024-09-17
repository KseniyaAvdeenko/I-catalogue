import {IModalFormInitial} from "../../interface/IInitialStates";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IModalForm} from "../../interface/IModalForm";

const initialState: IModalFormInitial = {
    isLoading: false,
    error: '',
    modalForm: null
}

export const modalFormSlice = createSlice({
    name: 'modalForm',
    initialState,
    reducers: {
        modalFormFetching(state){
            state.isLoading = true;
        },
        loadModalFormSuccess(state, action: PayloadAction<IModalForm>){
            state.isLoading = false;
            state.modalForm = action.payload
        },
        loadModalFormFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        updateModalFormSuccess(state, action: PayloadAction<IModalForm>){
            state.modalForm = action.payload
        },
        updateModalFormFail(state, action: PayloadAction<string>){
            state.error = action.payload
        },
    }
})

export default modalFormSlice.reducer