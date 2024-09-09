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

export interface IProdImg{
    id: number;
}

export interface IProdBase{
    name: string;
    price: number;
    currency: string;
    priceAttrs: string;
    otherValues: otherValue
}
export type otherValue = {
  [key: string]: string;
}

export interface IProd extends IProdBase{
    id: number;
    images: IProdImg[]|[]
}

export interface IProdCreation extends IProdBase{
    images: IProdImgBase[]|[]
}