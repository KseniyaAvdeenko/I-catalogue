export interface IContactsBase {
    content: string;
    isLink: boolean;
    linkHref:string;
    linkType: string;
}

export interface IContacts extends IContactsBase{
    id: number
}

export interface IInputProps{
    type: string;
    id: string;
    name: string;
    value: string;
    label: string;
    checked: boolean;
}