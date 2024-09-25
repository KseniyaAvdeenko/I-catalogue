import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";
import FooterLayout1 from "./FooterLayout1";
import FooterLayout2 from "./FooterLayout2";
import FooterLayout3 from "./FooterLayout3";
import styles from './Footer.module.sass';


interface IFooterProps {
    logo: string | undefined
}

const Footer: React.FC<IFooterProps> = ({logo}) => {
    const {footerSettings} = useAppSelector(state => state.footerSettingsReducer)

    const [footerStyles, setFooterStyles] = useState<IFooterSettingsBase>({
        background: '#fff',
        borderTopColor: '#000',
        footerBorderTop: true,
        contactsFontSize: 16,
        navLinksFontColorHover: '#000',
        navLinksFontSize: 18,
        fontColor: '#000',
        contentLayout: '1',
        copyrightsContent: ''
    })

    useEffect(() => {
        if (footerSettings) {
            setFooterStyles({
                ...footerStyles,
                background: footerSettings.background,
                borderTopColor: footerSettings.borderTopColor,
                footerBorderTop: footerSettings.footerBorderTop,
                contactsFontSize: footerSettings.contactsFontSize,
                navLinksFontColorHover: footerSettings.navLinksFontColorHover,
                navLinksFontSize: footerSettings.navLinksFontSize,
                fontColor: footerSettings.fontColor,
                contentLayout: footerSettings.contentLayout,
                copyrightsContent: footerSettings.copyrightsContent
            })
        }
    }, [footerSettings]);

    const onHoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = footerStyles.navLinksFontColorHover
    }
    const onHoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = footerStyles.fontColor
    }

    function getFooterLayout(contentLayout: string) {
        if (contentLayout === '1') {
            return (<FooterLayout1 onHoverIn={onHoverIn} onHoverOut={onHoverOut} footerStyles={footerStyles} logo={logo ?? ''}/>)
        } else if (contentLayout === '2') {
            return (<FooterLayout2 onHoverIn={onHoverIn} onHoverOut={onHoverOut} footerStyles={footerStyles}/>)
        } else if (contentLayout === '3') {
            return (<FooterLayout3 onHoverIn={onHoverIn} onHoverOut={onHoverOut} footerStyles={footerStyles} logo={logo ?? ''}/>)
        }
    }

    return (
        <footer className={styles.footer} style={{
            color: footerStyles.fontColor,
            background: footerStyles.background,
            borderTop: footerStyles.footerBorderTop
                ? `.1rem solid ${footerStyles.borderTopColor}`
                : 'none'
        }}>
            {getFooterLayout(footerStyles.contentLayout)}
        </footer>
    );
};

export default Footer;
