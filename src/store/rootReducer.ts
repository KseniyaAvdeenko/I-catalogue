import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import userReducer from "./reducers/userSlice";
import commonSettingsReducer from "./reducers/commonSettingsSlice";
import headerSettingsReducer from "./reducers/headerSettingsSlice";
import buttonSettingsReducer from "./reducers/buttonSettingsSlice";
import footerSettingsReducer from "./reducers/footerSettingsSlice";
import contactsReducer from './reducers/contactsSlice';
import mainPageSettingsReducer from "./reducers/mainPageSettingsSlice";
import navLinksReducer from './reducers/navLinksSlice';
import pageSettingsReducer from './reducers/pageSettingsSlice'

export const rootReducer = combineReducers({
    authReducer,
    userReducer,
    commonSettingsReducer,
    headerSettingsReducer,
    buttonSettingsReducer,
    footerSettingsReducer,
    contactsReducer,
    mainPageSettingsReducer,
    navLinksReducer,
    pageSettingsReducer,
})