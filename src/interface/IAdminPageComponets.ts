import {blockHeadingTypes} from "./IPagesSettings";
import {SeoTagType} from "./ISeoSettings";
import {SocialLinkIcons, SocialLinkIconType} from "./INavbar";

export interface IIntro {
    display: 'block' | 'none';
    justifyContent: 'start' | "center"
}

export interface IAdminComponentsProps {
    onChangeHandler: Function;
}

export interface IFonts {
    id: string;
    font: string;
}

export interface INavLinksHoverStyle {
    id: string;
    style: string;
}

export interface IOptions {
    open: boolean;
    display: string;
    top?: string;
}

export interface IHeaderLayout {
    id: string;
    image: string;
    value: string;
}

export interface IHeadingType {
    id: blockHeadingTypes;
    heading: string;
}

export interface ISidebarItemsVisibility {
    display: string;
    rotate: number;
    open: boolean;
}

export interface INavLinkBase {
    navLink: string;
    slug: string;
}

export interface INavLink extends INavLinkBase {
    id: number;
}

export interface IDetailProdPageLayout {
    id: string;
    image: string
}

export interface ICurrency {
    id: string;
    currency: string
}

export interface IFile {
    id?: number;
    prod: number;
    prodImg: File;
    mainImg: boolean;
}

export interface IOptionBase{
    name: string;
}

export interface ISeoTagType extends IOptionBase{
    id: SeoTagType;
}

export interface IInputType extends IOptionBase{
    type: string;
}

export interface ISocialIcons {
    name: SocialLinkIcons,
    iconFulfilled: string,
    iconOutlined: string,
}

export interface ISocialIconType extends IOptionBase{
    id: SocialLinkIconType,
    icon: string,
}

export interface IFilter {
    filter: string;
    queryDateStart: string,
    queryDateEnd: string,
}

export interface IOptionItem extends IOptionBase{
    id: string;
}