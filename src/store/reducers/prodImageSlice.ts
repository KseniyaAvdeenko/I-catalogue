import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProdImagesInitial} from "../../interface/IInitialStates";
import {IImage} from "../../interface/IProduct";
const initialState: IProdImagesInitial= {
    isLoading: false,
    error: '',
    images: null,
    image: null
}
export const prodImageSlice = createSlice({
    name: 'prodImages',
    initialState,
    reducers: {
        imagesFetching(state){
            state.isLoading = true;
        },
        loadImagesSuccess(state, action: PayloadAction<IImage[]>){
            state.isLoading = false;
            state.images = action.payload
        },
        loadImagesFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        imageFetching(state){
            state.isLoading = true;
        },
        createImageSuccess(state, action: PayloadAction<IImage>){
            state.image = action.payload
        },
        createImageFail(state, action: PayloadAction<string>){
            state.error = action.payload
        },
        updateImageSuccess(state, action: PayloadAction<IImage>){
            state.isLoading = false;
            state.image = action.payload
        },
        updateImageFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        deleteImageSuccess(state){
            state.image = null
        },
        deleteImageFail(state, action: PayloadAction<string>){
            state.error = action.payload
        },
    }
})

export default prodImageSlice.reducer