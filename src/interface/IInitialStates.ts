import {IButtonSettings, ICommonSettings, IFooterSettings, IHeaderSettings} from "./ICommonSettings";
import {IMainPageSetting, IPageSetting} from "./IPagesSettings";
import {IContacts, INavLinks} from "./INavbar";
import {IUser} from "./IUser";

export interface IInitialStatesBase {
    isLoading: boolean;
    error: string;
}

export interface IAuthState {
    isSignedUp: boolean;
    isAuth: boolean;
    error: string;
    refresh: string;
    access: string;
    lastLogin: string;
}

export interface ICommonBase {
    restored: boolean
}

export interface IButtonSettingsInitial extends IInitialStatesBase, ICommonBase {
    buttonSettings: IButtonSettings | null
}

export interface ICommonSettingsInitial extends IInitialStatesBase, ICommonBase {
    commonSettings: ICommonSettings | null;
}

export interface IFooterSettingsInitial extends IInitialStatesBase, ICommonBase {
    footerSettings: IFooterSettings | null
}

export interface IHeaderSettingsInitial extends IInitialStatesBase, ICommonBase {
    headerSettings: IHeaderSettings | null;
}

export interface IMainPageSettingsInitial extends IInitialStatesBase {
    mainPageSettings: IMainPageSetting | null
}

export interface INavLinksInitial extends IInitialStatesBase {
    navLinks: INavLinks[] | null;
    navLink: INavLinks | null;
}

export interface IContactsInitial extends IInitialStatesBase {
    contacts: IContacts[] | null;
    contact: IContacts | null;
}

export interface IPageSettingsInitial extends IInitialStatesBase {
    pages: IPageSetting[] | null
    page: IPageSetting | null
}

export interface IUserInitial {
    errorCurrentUser: string;
    errorUsers: string;
    errorUser: string;
    currentUser: IUser | null;
    user: IUser | null;
    users: IUser[] | null;
}