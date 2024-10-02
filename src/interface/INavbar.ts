export interface IContactsBase {
    content: string;
    isLink: boolean;
    linkHref: string;
    linkType: string;
}

export interface IContacts extends IContactsBase {
    id: number
}

export interface IInputProps {
    type: string;
    id: string;
    name: string;
    value: string;
    label: string;
    checked: boolean;
}

export type SocialLinkIconType = 'fulfilledOriginal' |
    'outlinedOriginal' |
    'fulfilledMonotone' |
    'outlinedMonotone'

export type SocialLinkIcons = 'telegram' |
    'facebook' |
    'instagram' |
    'youtube' |
    'whatsApp' |
    'twitter' |
    'tiktok' |
    'linkedin' |
    'Facebook Messenger'


export interface ISocialLinkBase {
    linkIconType: SocialLinkIconType
    linkIcon: SocialLinkIcons,
    linkHref: string,
    socialLinkColor: string;
}

export interface ISocialLink extends ISocialLinkBase {
    id: number
}
