import HeaderLayout1 from '../../assets/img/Layout1.svg';
import HeaderLayout2 from '../../assets/img/Layout2.svg';
import {
    ICurrency,
    IDetailProdPageLayout,
    IFonts,
    IHeaderLayout,
    IHeadingType, IInputType,
    INavLink,
    INavLinksHoverStyle, ISeoTagType
} from "../../interface/IAdminPageComponets";
import FooterLayout1 from '../../assets/img/FooterLayout1.svg';
import FooterLayout2 from '../../assets/img/FooterLayout2.svg';
import FooterLayout3 from '../../assets/img/FooterLayout3.svg';
import {IContacts, IInputProps, ISocialLink} from "../../interface/INavbar";
import DetailProdPageLayout1 from '../../assets/img/detailProdPageLayout1.svg';
import DetailProdPageLayout2 from '../../assets/img/detailProdPageLayout2.svg';
import {ISeoSettings} from "../../interface/ISeoSettings";


export const appFonts: IFonts[] = [
    {id: 'Raleway', font: 'Raleway'},
    {id: 'Rubik', font: 'Rubik'},
    {id: 'Roboto', font: 'Roboto'},
    {id: 'Poppins', font: 'Poppins'},
    {id: 'PT Sans', font: 'PT Sans'},
    {id: 'Open Sans', font: 'Open Sans'},
    {id: 'Nunito Sans', font: 'Nunito Sans'},
    {id: 'Noto Sans', font: 'Noto Sans'},
    {id: 'Montserrat', font: 'Montserrat'},
    {id: 'Lato', font: 'Lato'},
    {id: 'Karla', font: 'Karla'},
    {id: 'Inter', font: 'Inter'},
    {id: 'Fira Sans', font: 'Fira Sans'},
    {id: 'Comfortaa', font: 'Comfortaa'},
]

export const navLinksHoverStyles: INavLinksHoverStyle[] = [
    {id: 'none', style: 'Без стиля'},
    {id: 'changeColor', style: 'Смена цвета'},
    {id: 'underline', style: 'Нижнее подчеркивание'},
    {id: 'overline&underline', style: 'Верхнее и нижнее подчеркивания'},
]

export const headerLayouts: IHeaderLayout[] = [
    {id: 'header1', image: HeaderLayout1, value: '1'},
    {id: 'header2', image: HeaderLayout2, value: '2'}
]

export const footerLayouts: IHeaderLayout[] = [
    {id: 'footer1', image: FooterLayout1, value: '1'},
    {id: 'footer2', image: FooterLayout2, value: '2'},
    {id: 'footer3', image: FooterLayout3, value: '3'},
]

export const contactFieldExample: IContacts = {
    id: 0,
    content: '',
    isLink: false,
    linkHref: '',
    linkType: 'none'
}

export const linkTypes: IInputProps[] = [
    {type: 'radio', id: 'none', name: 'linkType', value: 'none', label: 'Не определено', checked: false},
    {type: 'radio', id: 'tel', name: 'linkType', value: 'tel', label: 'Телефон', checked: false},
    {type: 'radio', id: 'mailto', name: 'linkType', value: 'mailto', label: 'Email', checked: false},
    {type: 'radio', id: 'address', name: 'linkType', value: 'address', label: 'Адрес', checked: false},
]

export const navLinkFieldExample: INavLink = {id: 0, navLink: '', slug: ''}

export const headingTypes: IHeadingType[] = [
    {id: "h1", heading: 'Заголовок h1'},
    {id: "h2", heading: 'Заголовок h2'},
    {id: "h3", heading: 'Заголовок h3'},
    {id: "h4", heading: 'Заголовок h4'},
    {id: "h5", heading: 'Заголовок h5'},
    {id: "h6", heading: 'Заголовок h6'},
]

export const prodPageContentLayout: IDetailProdPageLayout[] = [
    {id: '1', image: DetailProdPageLayout1},
    {id: '2', image: DetailProdPageLayout2}
]

export const currencyTypes: ICurrency[] = [
    {id: 'USD', currency: '$'},
    {id: 'RUB', currency: '₽'},
    {id: 'EUR', currency: '€'},
]

export const inputTypes: IInputType[] = [
    {type: 'text', name: 'Текст'},
    {type: 'number', name: 'Число'},
    {type: 'tel', name: 'Телефон'},
    {type: 'email', name: 'Email'},
    {type: 'date', name: 'Дата'},
    {type: 'datetime-local', name: 'Дата и время'},
]

export const seoTagTypes: ISeoTagType[] = [
    {name: 'Мета-тег', id: 'meta_tag'},
    {name: 'Пиксель', id: 'pixel'}
]

export const seoTagExample: ISeoSettings = {
    id: 0, content: '', tag: "meta_tag", tagName: '', code: '', property: ''
}

export const dataListValues: string[] = [
    'robots', 'keywords', 'author', 'description'
]

export const socialLinkExample: ISocialLink = {
    id: 0, linkHref: '', linkIcon: 'telegram', linkIconType: 'fulfilledOriginal', socialLinkColor: ''
}
