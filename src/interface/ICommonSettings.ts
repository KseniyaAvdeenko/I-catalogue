export interface ICommonSettings {
    id: number;
    logo: string;
    favicon: string;
    basicFontColor: string
    basicFontSize: number;
    basicFontFamily: string
}

export interface IHeaderSettings {
    id: number;
    background: string;
    fontColor: string;
    contactsFontSize: number;
    navLinksFontSize: number;
    navLinksFontColorHover: string;
    navLinksFontColorHoverStyle: string;
    headerLayout: string;
    headerBottomBorder: boolean;
    headerBottomBorderColor: string;
}

export interface IFooterSettingsBase {
    background: string;
    fontColor: string;
    contactsFontSize: number;
    navLinksFontSize: number;
    navLinksFontColorHover: string;
    footerBorderTop: boolean
    borderTopColor: string;
    copyrightsContent: string;
    contentLayout: string;
}

export interface IFooterSettings extends IFooterSettingsBase{
    id: number;
}

export interface IButtonSettings {
    id: number;
    buttonBorderRadius: number;
    buttonBackground: string;
    buttonBorders: boolean;
    buttonBorderColor: string;
    buttonBorderWidth: number;
    buttonTextColor: string;
    buttonTextFontSize: number;
}

