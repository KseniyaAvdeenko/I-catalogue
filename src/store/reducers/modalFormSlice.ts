import {IModalFormInitial} from "../../interface/IInitialStates";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IModalForm} from "../../interface/IModalForm";

const initialState: IModalFormInitial = {
    isLoading: false,
    modalForm: null,
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
        loadModalFormFail(state){
            state.isLoading = false;
        },
        updateModalFormSuccess(state, action: PayloadAction<IModalForm>){
            state.modalForm = action.payload
        },
    }
})

export default modalFormSlice.reducer