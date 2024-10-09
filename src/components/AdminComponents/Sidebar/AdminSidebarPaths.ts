interface IAdminPaths {
    section: string;
    content: string
}

export const commonSettingsPaths: IAdminPaths[] = [
    {section: 'commonSettingsSection', content: 'Общие настройки сайта'},
    {section: 'headerSettingsSection', content: 'Настройка ‘шапки’ сайта'},
    {section: 'footerSettingsSection', content: 'Настройка “подвала” сайта'},
    {section: 'buttonSettingsSection', content: 'Настройка кнопок'},
]

export const navbarPaths: IAdminPaths[] = [
    {section: 'contactsSection', content: 'Контакты'},
    {section: 'socialLinksSection', content: 'Социальные ссылки-иконки'},
    {section: 'navLinksSection', content: 'Навигационные ссылки'},
]
export const prodSettingsPaths: IAdminPaths[] = [
    {section: 'prodDetailPageSection', content: 'Детальная страница товара\услуги'},
    {section: 'addingProdAttrsSection', content: 'Добавление характеристик товара\услуги'},
    {section: 'addingProdsSection', content: 'Добавление товара\услуги'},
]
export const modalFormSettingsPaths: IAdminPaths[] = [
    {section: 'modalFormSettingsSection', content: 'Настройка модального окна'},
    {section: 'addingFormInputsSection', content: 'Добавление и редактирование полей ввода модального окна'},
]
export const adminOrdersPaths: IAdminPaths[] = [
    {section: 'ordersTable', content: 'Сводная таблица заказов'},
    {section: 'addingFormInputsSection', content: 'Статистика по заказам'},
]

export interface ISidebarContent {
    order: number
    section: string;
    content: string;
    getItemsVisibilitySection: string
    link: string
    subsections: boolean
    subsectionsOpen?: boolean
    subsectionsDisplay?: 'none' | 'flex'
    arrowRotation?: number
    subsectionsArray?: IAdminPaths[]
}

export const SidebarContent: ISidebarContent[] = [
    {
        order: 1,
        section: 'commonSettings',
        content: 'Общие настройки сайта',
        getItemsVisibilitySection: 'commonSettings',
        link: 'common_settings/',
        subsections: true,
        subsectionsOpen: false,
        subsectionsDisplay: 'none',
        arrowRotation: 180,
        subsectionsArray: commonSettingsPaths
    },

    {
        order: 2,
        section: 'navbar',
        content: 'Контент “шапки” и “подвала” сайта',
        getItemsVisibilitySection: 'navbar',
        link: 'navbar/',
        subsections: true,
        subsectionsOpen: false,
        subsectionsDisplay: 'none',
        arrowRotation: 180,
        subsectionsArray: navbarPaths
    },
    {
        order: 3,
        section: 'mainPageSettings',
        content: 'Настройка главной страницы',
        getItemsVisibilitySection: 'none',
        link: 'main_page_settings/',
        subsections: false
    },
    {
        order: 5,
        section: 'prodSettings',
        content: 'Настройка и контент товаров/услуг',
        getItemsVisibilitySection: 'prodSettings',
        link: 'products_settings/',
        subsections: true,
        subsectionsOpen: false,
        subsectionsDisplay: 'none',
        arrowRotation: 180,
        subsectionsArray: prodSettingsPaths
    },
    {
        order: 6,
        section: 'editingProduct',
        content: 'Редактирование товаров/услуг',
        getItemsVisibilitySection: 'none',
        link: 'editing_products/',
        subsections: false
    },
    {
        order: 7,
        section: 'modalFormSettings',
        content: 'Настройки модального окна',
        getItemsVisibilitySection: 'modalFormSettings',
        link: 'modal_form/',
        subsections: true,
        subsectionsOpen: false,
        subsectionsDisplay: 'none',
        arrowRotation: 180,
        subsectionsArray: modalFormSettingsPaths
    },
    {
        order: 8,
        section: 'seoSettings',
        content: 'Настройки SEO сайта',
        getItemsVisibilitySection: 'none',
        link: 'seo_settings/',
        subsections: false
    },
    {
        order: 9,
        section: 'adminOrders',
        content: 'Заказы товаров/услуг',
        getItemsVisibilitySection: 'adminOrders',
        link: 'orders/',
        subsections: true,
        subsectionsOpen: false,
        subsectionsDisplay: 'none',
        arrowRotation: 180,
        subsectionsArray: adminOrdersPaths
    },
]