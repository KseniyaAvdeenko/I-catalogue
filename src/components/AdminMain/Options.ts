import Layout1 from '../../assets/img/Layout1.png';
import Layout2 from '../../assets/img/Layout2.png';

export interface IFonts {
    id: string;
    font:string;
}
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

export interface INavLinksHoverStyle{
    id: string;
    style: string;
}

export const navLinksHoverStyles: INavLinksHoverStyle[] = [
    {id: 'none', style: 'Без стиля'},
    {id: 'changeColor', style: 'Смена цвета'},
    {id: 'underline', style: 'Нижнее подчеркивание'},
    {id: 'overline&underline', style: 'Верхнее и нижнее подчеркивания'},
]

export interface IOptions {
    open: boolean;
    display: string;
    bottom: string;
}

export interface IHeaderLayout{
    id: string;
    image: string
}

export const headerLayouts: IHeaderLayout[] = [
    {id: '1', image: Layout1},
    {id: '2', image: Layout2}
]