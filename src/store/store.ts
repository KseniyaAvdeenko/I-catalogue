import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice';
import headerSettingsReducer from './reducers/headerSettingsSlice';
import footerSettingsReducer from './reducers/footerSettingsSlice';
import commonSettingsReducer from './reducers/commonSettingsSlice';
import buttonSettingsReducer from './reducers/buttonSettingsSlice';
import navbarReducer from './reducers/navbarSlice'


export const rootReducer = combineReducers({
    authReducer,
    userReducer,
    commonSettingsReducer,
    headerSettingsReducer,
    buttonSettingsReducer,
    footerSettingsReducer,
    navbarReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];