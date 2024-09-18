import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/redux";
import styles from './Layout.module.sass'
import {Link, NavLink} from "react-router-dom";

interface IHeaderProps {
    logo: string | undefined
}

const Header: React.FC<IHeaderProps> = ({logo}) => {
    const {headerSettings} = useAppSelector(state => state.headerSettingsReducer)
    const {pages} = useAppSelector(state => state.pageSettingsReducer)

    const [headerStyles, setHeaderStyles] = useState({
        background: '#fff',
        fontColor: '#000',
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
        e.currentTarget.style.color = navLinksStyle.color
    }

    const onHoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {

        e.currentTarget.style.color = navLinksStyle.hoverColor
    }

    function getHeaderLayout(layout: string, logo: string | undefined) {


        if (layout === '1') {
            return (
                <div className={headerContainerClass}>
                    <Link to={'/'} className={styles.image__container}>{logo && (<img src={logo} alt={'logo'}/>)}</Link>
                    <nav className={styles.nav}>
                        {pages && pages.map(page => (
                            <Link
                                onMouseEnter={e => onHoverIn(e)}
                                onMouseLeave={e => onHoverOut(e)}
                                key={page.id} to={'page/' + page.slug}
                                className={styles.nav__item}
                                style={{color: navLinksStyle.color, fontSize: navLinksStyle.fontSize}}>
                                {/*<span>*/}
                                    {page.navLink}
                                {/*</span>*/}
                            </Link>
                        ))}
                    </nav>
                    <div></div>
                </div>
            )
        } else if (layout === '2') {
            return (
                <div className={headerContainerClass}>
                    <Link to={'/'} className={styles.image__container}>{logo && (<img src={logo} alt={'logo'}/>)}</Link>
                    <div></div>
                </div>
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
