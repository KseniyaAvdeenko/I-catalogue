import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import {getIconFulfilledMonotone, getIconOriginal, getIconOutlinedMonotone} from "../../utils/getSocialIcon";

const SocialLinks:React.FC<{socialItemsClass: string, socialItemClass: string}>  = ({socialItemsClass, socialItemClass}) => {
    const {isLoading, socialLinks} = useAppSelector(state => state.socialLinkReducer)

    return (
        <div className={socialItemsClass}>
            {isLoading && 'Loading...'}
            {socialLinks && socialLinks.map(link => (
                <Link className={socialItemClass} key={link.id} to={link.linkHref}>
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

export default SocialLinks;
