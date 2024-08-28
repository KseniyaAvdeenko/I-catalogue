export interface INavLinksBase{
    navLink: string
}

export interface INavLinks extends INavLinksBase{
    id: number;
    correspondingPageName: string
}

export interface IContactsBase {
    content: string;
    isLink: boolean;
    linkHref?:string;
    linkType: string;
}

export interface IContacts extends IContactsBase{
    id: number
}