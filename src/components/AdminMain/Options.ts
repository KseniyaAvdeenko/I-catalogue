import HeaderLayout1 from '../../assets/img/Layout1.svg';
import HeaderLayout2 from '../../assets/img/Layout2.svg';
import {
    ICurrency,
    IDetailProdPageLayout,
    IFonts,
    IHeaderLayout,
    IHeadingType, IInputType,
    INavLink,
    INavLinksHoverStyle, ISeoTagType, ISocialIcons, ISocialIconType
} from "../../interface/IAdminPageComponets";
import FooterLayout1 from '../../assets/img/FooterLayout1.svg';
import FooterLayout2 from '../../assets/img/FooterLayout2.svg';
import FooterLayout3 from '../../assets/img/FooterLayout3.svg';
import {IContacts, IInputProps, ISocialLink} from "../../interface/INavbar";
import DetailProdPageLayout1 from '../../assets/img/detailProdPageLayout1.svg';
import DetailProdPageLayout2 from '../../assets/img/detailProdPageLayout2.svg';
import {ISeoSettings} from "../../interface/ISeoSettings";
import TelegramIconFulfilled from '../../assets/img/SocialLinks/TelegramFulfilledOriginal.svg';
import FacebookIconFulfilled from '../../assets/img/SocialLinks/FacebookFulfilledOriginal.svg';
import InstagramIconFulfilled from '../../assets/img/SocialLinks/InstagramFulfilledOriginal.svg';
import LinkedinIconFulfilled from '../../assets/img/SocialLinks/LinkedinFulfilledOriginal.svg';
import TiktokIconFulfilled from '../../assets/img/SocialLinks/TiktokFulfilledOriginal.svg';
import TwitterIconFulfilled from '../../assets/img/SocialLinks/TwitterFulfilledOriginal.svg';
import WhatsAppIconFulfilled from '../../assets/img/SocialLinks/WhatsappFulfilledOriginal.svg';
import YoutubeIconFulfilled from '../../assets/img/SocialLinks/YoutubeFulfilledOriginal.svg';
import FacebookMessengerFulfilled from '../../assets/img/SocialLinks/FacebookMessengerFulfilledOriginal.svg';
import TelegramIconOutlined from '../../assets/img/SocialLinks/TelegramOutlinedOriginal.svg';
import FacebookIconOutlined from '../../assets/img/SocialLinks/FacebookOutlinedOriginal.svg';
import InstagramIconOutlined from '../../assets/img/SocialLinks/InstagramOutlinedOriginal.svg';
import LinkedinIconOutlined from '../../assets/img/SocialLinks/LinkedinOutlinedOriginal.svg';
import TiktokIconOutlined from '../../assets/img/SocialLinks/TiktokOutlinedOriginal.svg';
import TwitterIconOutlined from '../../assets/img/SocialLinks/TwitterOutlinedOriginal.svg';
import WhatsAppIconOutlined from '../../assets/img/SocialLinks/WhatsappOutlinedOriginal.svg';
import YoutubeIconOutlined from '../../assets/img/SocialLinks/YoutubeOutlinedOriginal.svg';
import FacebookMessengerOutlined from '../../assets/img/SocialLinks/FacebookMessengerOutlinedOriginal.svg';
import OutlinedOriginal from '../../assets/img/outlinedOriginal.svg';
import OutlinedMonotone from '../../assets/img/outlinedMonotone.svg';
import FulfilledOriginal from '../../assets/img/fulfilledOriginal.svg';
import FulfilledMonotone from '../../assets/img/fulfilledMonotone.svg';


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
    id: 0, content: '', tag: "meta_tag", tagName: '', code: ''
}

export const dataListValues: string[] = [
    'robots', 'keywords', 'author', 'description'
]

export const socialLinkExample: ISocialLink = {
    id: 0, linkHref: '', linkIcon: 'Telegram', linkIconType: 'fulfilledOriginal', socialLinkColor: 'original'
}

export const socialIcons: ISocialIcons[] = [
    {name: 'Telegram', iconOutlined: TelegramIconOutlined, iconFulfilled: TelegramIconFulfilled},
    {name: 'Facebook', iconOutlined: FacebookIconOutlined, iconFulfilled: FacebookIconFulfilled},
    {name: 'Instagram', iconOutlined: InstagramIconOutlined, iconFulfilled: InstagramIconFulfilled},
    {name: 'Linkedin', iconOutlined: LinkedinIconOutlined, iconFulfilled: LinkedinIconFulfilled},
    {name: 'TikTok', iconOutlined: TiktokIconOutlined, iconFulfilled: TiktokIconFulfilled},
    {name: 'Twitter', iconOutlined: TwitterIconOutlined, iconFulfilled: TwitterIconFulfilled},
    {name: 'WhatsApp', iconOutlined: WhatsAppIconOutlined, iconFulfilled: WhatsAppIconFulfilled},
    {name: 'Youtube', iconOutlined: YoutubeIconOutlined, iconFulfilled: YoutubeIconFulfilled},
    {name: 'FacebookMessenger', iconOutlined: FacebookMessengerOutlined, iconFulfilled: FacebookMessengerFulfilled},
]

export const socialIconTypes: ISocialIconType[] = [
    {id: 'fulfilledOriginal', icon: FulfilledOriginal, name: 'Полная заливка оригинального цвета'},
    {id: 'fulfilledMonotone', icon: FulfilledMonotone, name: 'Полная монотонная заливка'},
    {id: 'outlinedOriginal', icon: OutlinedOriginal, name: 'Контур оригинального цвета'},
    {id: 'outlinedMonotone', icon: OutlinedMonotone, name: 'Контур монотонный'},
]

export const tableHead: Array<{id: string, name:string, width: string}> = [
    {id: 'id', name: '#', width: '3%'},
    {id:'orderDate', name:'Дата заказа', width: '8%'},
    {id:'product', name:'Товар/услуга', width: '15%'},
    {id:'totalPrice', name:'Итоговая стоимость', width: '8%'},
    {id:'data', name:'Данные формы', width: '30%'},
    {id:'paid', name:'Оплачено', width: '5%'},
    {id:'paymentData', name:'Данные об оплате', width: '20%'},
]

export const filterOptions: Array<{id: string, name: string}> = [
    {id: 'all', name: 'Все'},
    {id: 'paid', name: 'Только оплаченные'},
    {id: 'unpaid', name: 'Только неоплаченные'},
]
export const intervalOptions: Array<{id: string, name: string}> = [
    {id: 'days', name: 'дни'},
    {id: 'months', name: 'месяцы'},
    {id: 'years', name: 'года'}
]