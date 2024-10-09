
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


export const Sidebar = [
    {section: 'commonSettings', link}
]