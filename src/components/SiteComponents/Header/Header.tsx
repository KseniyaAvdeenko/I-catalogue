import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import styles from '../Layout.module.sass'
import {Link, NavLink} from "react-router-dom";
import contactLinkHref from "../../AdminMain/AdminNavbar/Contacts/ContactLinkHref";
import HeaderNav from "./HeaderNav";
import HeaderContacts from "./HeaderContacts";
import HeaderLayout1 from "./HeaderLayout1";
import HeaderLayout2 from "./HeaderLayout2";

interface IHeaderProps {
    logo: string | undefined
}

const Header: React.FC<IHeaderProps> = ({logo}) => {
    const {headerSettings} = useAppSelector(state => state.headerSettingsReducer)
    const [headerStyles, setHeaderStyles] = useState<{ background: string; fontColor: string; borderBottom: string; }>({
        background: '',
        fontColor: '',
        borderBottom: 'none',
    })
    const [headerContainerClass, setHeaderContainerClass] = useState<string>(styles.header__container)
    const [navLinksStyle, setNavLinksStyle] = useState({
        fontSize: 16,
        color: headerStyles.fontColor,
        hoverColor: headerStyles.fontColor,
        hoverStyle: 'none'
    })

    useEffect(() => {
        if (headerSettings) {
            setHeaderStyles({
                ...headerStyles,
                background: headerSettings.background,
                fontColor: headerSettings.fontColor,
                borderBottom: headerSettings.headerBottomBorder ? `.1rem solid ${headerSettings.headerBottomBorderColor}` : 'none'
            })
            if (headerSettings.headerLayout === '1') setHeaderContainerClass([styles.header__container, styles.header__layout1].join(' '))
            if (headerSettings.headerLayout === '2') setHeaderContainerClass([styles.header__container, styles.header__layout2].join(' '))
            setNavLinksStyle({
                ...navLinksStyle,
                fontSize: headerSettings.navLinksFontSize,
                hoverColor: headerSettings.navLinksFontColorHover,
                hoverStyle: headerSettings.navLinksFontColorHoverStyle
            })
        }
    }, [headerSettings])

    const onHoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = navLinksStyle.color;
        e.currentTarget.style.color = navLinksStyle.color;
        e.currentTarget.childNodes.forEach(el => {
            if (el instanceof HTMLElement) {
                el.style.width = '0'
            }
        })
    }

    const onHoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (navLinksStyle.hoverStyle === 'changeColor') e.currentTarget.style.color = navLinksStyle.hoverColor
        if (navLinksStyle.hoverStyle === 'underline') {
            e.currentTarget.style.color = navLinksStyle.hoverColor
            e.currentTarget.childNodes.forEach(el => {
                if (el instanceof HTMLElement && el.classList.contains('underline')) {
                    el.style.width = '100%'
                    el.style.background = navLinksStyle.hoverColor
                }
            })
        }
        if (navLinksStyle.hoverStyle === 'overline&underline') {
            e.currentTarget.style.color = navLinksStyle.hoverColor
            e.currentTarget.childNodes.forEach(el => {
                if (el instanceof HTMLElement) {
                    el.style.width = '100%';
                    el.style.background = navLinksStyle.hoverColor
                }
            })
        }
    }

    function getHeaderLayout(layout: string, logo: string | undefined) {
        if (layout === '1') {
            return (
                <HeaderLayout1 headerContainerClass={headerContainerClass}
                               logo={logo ?? ''} onHoverOut={onHoverOut} onHoverIn={onHoverIn}
                               navLinksStyle={navLinksStyle} headerStyles={headerStyles}/>
            )
        } else if (layout === '2') {
            return (
                <HeaderLayout2 headerContainerClass={headerContainerClass}
                               logo={logo ?? ''} onHoverOut={onHoverOut} onHoverIn={onHoverIn}
                               navLinksStyle={navLinksStyle} headerStyles={headerStyles}/>
            )
        }
    }

    return (
        <header style={headerStyles} className={styles.header}>
            {getHeaderLayout(headerSettings ? headerSettings.headerLayout : "1", logo)}
        </header>
    );
};

export default Header;
