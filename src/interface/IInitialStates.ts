import {IButtonSettings, ICommonSettings, IFooterSettings, IHeaderSettings} from "./ICommonSettings";
import {IMainPageSetting, IPageSetting} from "./IPagesSettings";
import {IContacts} from "./INavbar";
import {IUser} from "./IUser";
import {IImage, IProd, IProdAttrs, IProdReadOnly, IProductPageSettings} from "./IProduct";

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

export interface IProdPageInitial extends IInitialStatesBase{
    prodPageSettings: IProductPageSettings|null
}

export interface IProdAttrsInitial extends IInitialStatesBase{
    prodAttrs: IProdAttrs[]|null;
    prodAttr: IProdAttrs|null;
}

export interface IProdInitial extends IInitialStatesBase{
    productsReadOnly: IProdReadOnly[]|null;
    productReadOnly: IProdReadOnly|null;
    products: IProd[]|null;
    product: IProd|null;
}

export interface IProdImagesInitial extends IInitialStatesBase{
    images: IImage[]|null;
    image: IImage|null
}