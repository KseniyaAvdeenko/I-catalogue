import {IButtonSettings, ICommonSettings, IFooterSettings, IHeaderSettings} from "./ICommonSettings";
import {IMainPageSetting, IPageSetting} from "./IPagesSettings";
import {IContacts, ISocialLink} from "./INavbar";
import {IUser} from "./IUser";
import {IImage, IProd, IProdAttrs, IProdReadOnly, IProductPageSettings} from "./IProduct";
import {IModalForm} from "./IModalForm";
import {INewOrder, IOrder} from "./IOrder";
import {ISeoSettings} from "./ISeoSettings";

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
    accessExpires: string;
    refreshExpires: string;
}

export interface ICommonBase {
    restored: boolean
}

export interface IButtonSettingsInitial extends IInitialStatesBase, ICommonBase {
    buttonSettings: IButtonSettings | null;
    updatingError: string;
}

export interface ICommonSettingsInitial extends IInitialStatesBase, ICommonBase {
    commonSettings: ICommonSettings | null;
    updatingError: string;
}

export interface IFooterSettingsInitial extends IInitialStatesBase, ICommonBase {
    footerSettings: IFooterSettings | null;
    updatingError: string;
}

export interface IHeaderSettingsInitial extends IInitialStatesBase, ICommonBase {
    headerSettings: IHeaderSettings | null;
    updatingError: string;
}

export interface IMainPageSettingsInitial extends IInitialStatesBase {
    mainPageSettings: IMainPageSetting | null;
    updatingError: string;
}


export interface IContactsInitial extends IInitialStatesBase {
    contacts: IContacts[] | null;
    contact: IContacts | null;
    contactError: string;
}

export interface IPageSettingsInitial extends IInitialStatesBase {
    pages: IPageSetting[] | null
    page: IPageSetting | null;
    pageError: string
}

export interface IUserInitial {
    errorCurrentUser: string;
    errorUsers: string;
    errorUser: string;
    currentUser: IUser | null;
    user: IUser | null;
    users: IUser[] | null;
}

export interface IProdPageInitial extends IInitialStatesBase {
    prodPageSettings: IProductPageSettings | null
    updatingError: string;
}

export interface IProdAttrsInitial extends IInitialStatesBase {
    prodAttrs: IProdAttrs[] | null;
    prodAttr: IProdAttrs | null;
    prodAttrError: string;
}

export interface IProdInitial extends IInitialStatesBase {
    productsReadOnly: IProdReadOnly[] | null;
    productReadOnly: IProdReadOnly | null;
    products: IProd[] | null;
    product: IProd | null;
    productError: string;
}

export interface IProdImagesInitial extends IInitialStatesBase {
    images: IImage[] | null;
    image: IImage | null
}

export interface IModalFormInitial extends IInitialStatesBase {
    modalForm: IModalForm | null;
    updatingError: string;
}

export interface IPaymentData {
    youkassaPaymentId: string | null,
    orderPaymentId: number | null,
    orderId: number | null;
    confirmation_url: string;
}

export interface IOrderInitial extends IInitialStatesBase {
    orders: IOrder[] | null;
    newOrder: INewOrder | null;
    newOrderError: string;
    newOrderPaymentData: IPaymentData;
    paymentError: string;
    paymentPaid: boolean,
    createdOrderSuccess: boolean
}

export interface IPaginatedProdsInitial extends IInitialStatesBase {
    prodsPaginated: IProdReadOnly[] | [];
    count: number;
    pageSize: number;
    totalPages: number;
    pages: number[] | [],
    currentPage: number;
}

export interface ISeoSettingsInitial extends IInitialStatesBase {
    seoTags: ISeoSettings[] | null;
    seoTag: ISeoSettings | null;
    seoTagError: string;
}

export interface ISocialLinksInitial extends IInitialStatesBase {
    socialLinks: ISocialLink[] | null;
    socialLink: ISocialLink | null;
    socialLinkError: string;
}