import HeaderLayout1 from '../../assets/img/Layout1.png';
import HeaderLayout2 from '../../assets/img/Layout2.png';
import {IFonts, IHeaderLayout, INavLinksHoverStyle} from "../../interface/IAdminPageComponets";
import FooterLayout1 from '../../assets/img/FooterLayout1.png';
import FooterLayout2 from '../../assets/img/FooterLayout2.png';
import FooterLayout3 from '../../assets/img/FooterLayout3.png';
import {IContactField} from "../../interface/IFields";


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
    {id: '1', image: HeaderLayout1},
    {id: '2', image: HeaderLayout2}
]

export const footerLayouts: IHeaderLayout[] = [
    {id: '1', image: FooterLayout1},
    {id: '2', image: FooterLayout2},
    {id: '3', image: FooterLayout3},
]

export const contactFieldExample: IContactField = {
    content: {label: 'Контакт', input: {type: 'text', id: 'content', name: 'content'}},
    isLink: {label: 'Ссылка', input: {type: 'checkbox', checked: false, id: 'isLink', name: 'isLink'}},
    linkHref: {label: 'Ссылка', input: {type: 'text', id: 'linkHref', name: 'linkHref', value: '', checked: false}},
    linkType: {
        label: 'Тип ссылки',
        inputs: [
            {type: 'radio', id: 'none', name: 'linkType', value: 'none', label: 'Не определено', checked: false},
            {type: 'radio', id: 'tel', name: 'linkType', value: 'tel', label: 'Телефон', checked: false},
            {type: 'radio', id: 'mailTo', name: 'linkType', value: 'mailto', label: 'Email', checked: false},
            {type: 'radio', id: 'address', name: 'linkType', value: 'address', label: 'Адрес', checked: false},
        ]
    }
}