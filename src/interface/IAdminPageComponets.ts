import {blockHeadingTypes} from "./IPagesSettings";

export interface IAdminComponentsProps{
    isLoading: boolean;
    onChangeHandler: Function;
}
export interface IFonts {
    id: string;
    font:string;
}

export interface INavLinksHoverStyle{
    id: string;
    style: string;
}

export interface IOptions {
    open: boolean;
    display: string;
    bottom: string;
}

export interface IHeaderLayout{
    id: string;
    image: string;
    value: string;
}

export interface IHeadingType{
    id: blockHeadingTypes;
    heading: string;
}

export interface ISidebarItemsVisibility{
    display: string;
    rotate: number;
    open: boolean;
}
export interface INavLinkBase{
    navLink: string;
    slug: string;
}
export interface INavLink extends INavLinkBase{
    id: number;
}

export interface IDetailProdPageLayout{
    id: string;
    image: string
}

export interface ICurrency{
    id: string;
    currency: string
}

export interface IFile{
    id?: number;
    prod: number;
    prodImg: File;
    mainImg: boolean;
}

export interface IImagePreview{
     imgName: string, image: string, mainImg: boolean
}

export interface IInputType{
    type: string, name: string
}