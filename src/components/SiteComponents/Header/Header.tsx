import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import styles from './Header.module.sass';
import HeaderLayout1 from "./HeaderLayout1";
import HeaderLayout2 from "./HeaderLayout2";
import HeaderBurgerMenu from "./HeaderBurgerMenu";

interface IHeaderProps {
    logo: string | null
}

const Header: React.FC<IHeaderProps> = ({logo}) => {
    const {headerSettings} = useAppSelector(state => state.headerSettingsReducer)
    const [headerStyles, setHeaderStyles] = useState<{ background: string; fontColor: string; borderBottom: string; }>({
        background: '',
        fontColor: '',
        borderBottom: 'none',
    })
    const [headerContainerClass, setHeaderContainerClass] = useState<string>(styles.header__container)
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false)

    const [navLinksStyle, setNavLinksStyle] = useState<{ fontSize: string; color: string; hoverColor: string; hoverStyle: string }>({
        fontSize: `1.6rem`,
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
                fontSize: `clamp(1.6rem, 1.8rem, ${headerSettings.navLinksFontSize}px)`,
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

    const openBurgerMenu = () => setIsOpenBurgerMenu(true)

    const closeBurgerMenu = () => setIsOpenBurgerMenu(false)

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

    function getHeaderLayout(layout: string, logo: string | null) {
        if (layout === '1') {
            return (
                <HeaderLayout1 headerContainerClass={headerContainerClass} burgerClass={styles.burgerMenu__button}
                               logo={logo ? logo : ''} onHoverOut={onHoverOut} onHoverIn={onHoverIn}
                               navLinksStyle={navLinksStyle} headerStyles={headerStyles}
                               openBurgerMenu={openBurgerMenu}
                />
            )
        } else if (layout === '2') {
            return (
                <HeaderLayout2 headerContainerClass={headerContainerClass} burgerClass={styles.burgerMenu__button}
                               logo={logo ? logo : ''} onHoverOut={onHoverOut} onHoverIn={onHoverIn}
                               navLinksStyle={navLinksStyle} headerStyles={headerStyles}
                               openBurgerMenu={openBurgerMenu}
                />
            )
        }
    }

    return (
        <header style={headerStyles} className={styles.header}>
            {getHeaderLayout(headerSettings ? headerSettings.headerLayout : "1", logo)}
            <HeaderBurgerMenu
                navLinksStyle={navLinksStyle}
                onHoverOut={onHoverOut}
                onHoverIn={onHoverIn}
                headerStyles={headerStyles}
                isOpen={isOpenBurgerMenu}
                closeBurgerMenu={closeBurgerMenu}
            />
        </header>
    );
};

export default Header;
