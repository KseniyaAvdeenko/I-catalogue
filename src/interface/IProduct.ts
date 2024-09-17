import {IHeading} from "./IPagesSettings";

export interface IProductPageSettings {
    background: string;
    contentLayout: string;
    id: number;
    headingSettings: IHeading;
}

export interface IProdAttrsBase{
    attribute: string;
}
export interface IProdAttrs extends IProdAttrsBase{
    id: number;
}

export interface IProdImgBase{
    prodImg: string;
    mainImg: boolean;
}

export interface IProdImg extends IProdImgBase{
    id: number;
}

export interface IImageBase extends IProdImgBase{
    prod: number
}
export interface IImage extends IImageBase{
    id: number;
}
export interface IProdBase{
    name: string;
    price: number;
    currency: string;
    priceAttrs: string;
    otherValues: IOtherValue|{}
}
export interface IOtherValue {
  [key: string]: string;
}

export interface IProd extends IProdBase{
    id: number;
}

export interface IProdReadOnly extends IProd{
    images: IProdImg[]|[]
}