import React from 'react';
import styles from './Header.module.sass';
import {useAppSelector} from "../../../hooks/redux";
import {Link} from "react-router-dom";
import {socialIcons} from "../../AdminMain/Options";
import {SocialLinkIcons, SocialLinkIconType} from "../../../interface/INavbar";
import {FacebookIconFulfilledMonotone, FacebookIconOutlinedMonotone} from "../../UI/Icons/SocialLinks/FacebookIcons";
import {
    FacebookMessengerIconFulfilledMonotone,
    FacebookMessengerIconOutlinedMonotone
} from "../../UI/Icons/SocialLinks/FacebookMessengerIcons";
import {InstagramIconFulfilledMonotone, InstagramIconOutlinedMonotone} from "../../UI/Icons/SocialLinks/InstagramIcons";
import {LinkedinIconFulfilledMonotone, LinkedinIconOutlinedMonotone} from "../../UI/Icons/SocialLinks/LinkedinIcons";
import {TelegramIconFulfilledMonotone, TelegramIconOutlinedMonotone} from "../../UI/Icons/SocialLinks/TelegramIcons";
import {TikTokIconFulfilledMonotone, TikTokIconOutlinedMonotone} from "../../UI/Icons/SocialLinks/TikTokIcons";
import {TwitterIconFulfilledMonotone, TwitterIconOutlinedMonotone} from "../../UI/Icons/SocialLinks/TwitterIcons";
import {WhatsAppIconFulfilledMonotone, WhatsAppIconOutlinedMonotone} from "../../UI/Icons/SocialLinks/WhatsAppIcons";
import {YouTubeIconFulfilledMonotone, YouTubeIconOutlinedMonotone} from "../../UI/Icons/SocialLinks/YouTubeIcons";

const HeaderSocialLinks = () => {
    const {isLoading, socialLinks} = useAppSelector(state => state.socialLinkReducer)

    const getIconOriginal = (icon: SocialLinkIcons, type: SocialLinkIconType): React.ReactNode => {
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

    const getIconFulfilledMonotone = (icon: SocialLinkIcons, color: string) => {
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

    const getIconOutlinedMonotone = (icon: SocialLinkIcons, color: string) => {
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

    return (
        <div className={styles.socialLinks__items}>
            {isLoading && 'Loading...'}
            {socialLinks && socialLinks.map(link => (
                <Link className={styles.socialLinks__item} key={link.id} to={link.linkHref}>
                    {link.linkIconType === 'fulfilledOriginal' || link.linkIconType === 'outlinedOriginal'
                        ? getIconOriginal(link.linkIcon, link.linkIconType)
                        : link.linkIconType === 'fulfilledMonotone'
                            ? getIconFulfilledMonotone(link.linkIcon, link.socialLinkColor)
                            : getIconOutlinedMonotone(link.linkIcon, link.socialLinkColor)
                    }
                </Link>
            ))}
        </div>
    );
};

export default HeaderSocialLinks;
