import HeaderLayout1 from '../../assets/img/Layout1.png';
import HeaderLayout2 from '../../assets/img/Layout2.png';
import {IFonts, IHeaderLayout, INavLinksHoverStyle} from "../../interface/IAdminPageComponets";
import FooterLayout1 from '../../assets/img/FooterLayout1.png';
import FooterLayout2 from '../../assets/img/FooterLayout2.png';
import FooterLayout3 from '../../assets/img/FooterLayout3.png';


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