import {IPaginatedProdsInitial} from "../../interface/IInitialStates";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProdsByPage} from "../../interface/IProduct";
import {getPageCount} from "../../utils/getPageCount";
import {getPages} from "../../utils/getPages";

const initialState: IPaginatedProdsInitial = {
    prodsPaginated: [],
    count: 0,
    pageSize: 12,
    totalPages: 0,
    pages: [],
    isLoading: false,
    currentPage: 1
}

export const paginatedProductSlice = createSlice({
    name: 'paginatedProducts',
    initialState,
    reducers: {
        fetchingPaginatedProds(state) {
            state.isLoading = true
        },
        loadProdsPaginatedSuccess(state, action: PayloadAction<IProdsByPage>) {
            state.isLoading = false;
            state.prodsPaginated = action.payload.results;
            state.count = action.payload.count;
            state.totalPages = getPageCount(state.count, state.pageSize)
            state.pages = getPages(state.totalPages)
        },
        loadProdsPaginatedFail(state) {
            state.isLoading = false;
        },
        changePageSizeSuccess(state, action: PayloadAction<number>){
            state.pageSize = action.payload
        },
        changeCurrentPageSuccess(state, action: PayloadAction<number>){
            state.currentPage = action.payload
        }
    }
})

export default paginatedProductSlice.reducer