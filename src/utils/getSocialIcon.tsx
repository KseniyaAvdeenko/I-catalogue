import {SocialLinkIcons, SocialLinkIconType} from "../interface/INavbar";
import React from "react";
import {socialIcons} from "../components/AdminMain/Options";
import {
    FacebookIconFulfilledMonotone,
    FacebookIconOutlinedMonotone
} from "../components/UI/Icons/SocialLinks/FacebookIcons";
import {
    FacebookMessengerIconFulfilledMonotone,
    FacebookMessengerIconOutlinedMonotone
} from "../components/UI/Icons/SocialLinks/FacebookMessengerIcons";
import {
    InstagramIconFulfilledMonotone,
    InstagramIconOutlinedMonotone
} from "../components/UI/Icons/SocialLinks/InstagramIcons";
import {
    LinkedinIconFulfilledMonotone,
    LinkedinIconOutlinedMonotone
} from "../components/UI/Icons/SocialLinks/LinkedinIcons";
import {
    TelegramIconFulfilledMonotone,
    TelegramIconOutlinedMonotone
} from "../components/UI/Icons/SocialLinks/TelegramIcons";
import {TikTokIconFulfilledMonotone, TikTokIconOutlinedMonotone} from "../components/UI/Icons/SocialLinks/TikTokIcons";
import {
    TwitterIconFulfilledMonotone,
    TwitterIconOutlinedMonotone
} from "../components/UI/Icons/SocialLinks/TwitterIcons";
import {
    WhatsAppIconFulfilledMonotone,
    WhatsAppIconOutlinedMonotone
} from "../components/UI/Icons/SocialLinks/WhatsAppIcons";
import {
    YouTubeIconFulfilledMonotone,
    YouTubeIconOutlinedMonotone
} from "../components/UI/Icons/SocialLinks/YouTubeIcons";

export const getIconOriginal = (icon: SocialLinkIcons, type: SocialLinkIconType): React.ReactNode => {
    let result: React.ReactNode;
    socialIcons.map(socialIcon => {
        if (type === 'fulfilledOriginal' && socialIcon.name === icon) {
            result = <img src={socialIcon.iconFulfilled} alt={socialIcon.name}/>
        } else if (type === 'outlinedOriginal' && socialIcon.name === icon) {
            result = <img src={socialIcon.iconOutlined} alt={socialIcon.name}/>
        }
    })
    return result
}

export const getIconFulfilledMonotone = (icon: SocialLinkIcons, color: string) => {
    switch (icon) {
        case "Facebook":
            return (<FacebookIconFulfilledMonotone iconColor={color}/>)
        case "FacebookMessenger":
            return (<FacebookMessengerIconFulfilledMonotone iconColor={color}/>)
        case "Instagram":
            return (<InstagramIconFulfilledMonotone iconColor={color}/>)
        case "Linkedin":
            return (<LinkedinIconFulfilledMonotone iconColor={color}/>)
        case "Telegram":
            return (<TelegramIconFulfilledMonotone iconColor={color}/>)
        case "TikTok":
            return (<TikTokIconFulfilledMonotone iconColor={color}/>)
        case "Twitter":
            return (<TwitterIconFulfilledMonotone iconColor={color}/>)
        case "WhatsApp":
            return (<WhatsAppIconFulfilledMonotone iconColor={color}/>)
        case "Youtube":
            return (<YouTubeIconFulfilledMonotone iconColor={color}/>)
    }
}

export const getIconOutlinedMonotone = (icon: SocialLinkIcons, color: string) => {
    switch (icon) {
        case "Facebook":
            return (<FacebookIconOutlinedMonotone iconColor={color}/>)
        case "FacebookMessenger":
            return (<FacebookMessengerIconOutlinedMonotone iconColor={color}/>)
        case "Instagram":
            return (<InstagramIconOutlinedMonotone iconColor={color}/>)
        case "Linkedin":
            return (<LinkedinIconOutlinedMonotone iconColor={color}/>)
        case "Telegram":
            return (<TelegramIconOutlinedMonotone iconColor={color}/>)
        case "TikTok":
            return (<TikTokIconOutlinedMonotone iconColor={color}/>)
        case "Twitter":
            return (<TwitterIconOutlinedMonotone iconColor={color}/>)
        case "WhatsApp":
            return (<WhatsAppIconOutlinedMonotone iconColor={color}/>)
        case "Youtube":
            return (<YouTubeIconOutlinedMonotone iconColor={color}/>)
    }
}