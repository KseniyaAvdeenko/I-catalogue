import React from 'react';
import styles from './Header.module.sass';
import CloseBtn from '../../../assets/img/closeCross.svg'
import {useAppSelector} from "../../../hooks/redux";
import HeaderContacts from "./HeaderContacts";
import {Link} from "react-router-dom";

interface IHeaderBurgerMenuProps {
    isOpen: boolean;
    closeBurgerMenu: React.MouseEventHandler<HTMLDivElement>;
    navLinksStyle: { color: string; fontSize: string; hoverColor: string; hoverStyle: string }
    headerStyles: { background: string; fontColor: string; borderBottom: string; }
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>
}

const HeaderBurgerMenu: React.FC<IHeaderBurgerMenuProps> = ({
                                                                onHoverOut,
                                                                onHoverIn,
                                                                isOpen,
                                                                closeBurgerMenu,
                                                                headerStyles,
                                                                navLinksStyle
                                                            }) => {
    const {pages} = useAppSelector(state => state.pageSettingsReducer)
    return (
        <div onClick={closeBurgerMenu}
             className={isOpen ? [styles.burgerMenu, styles.burgerMenu_open].join(' ') : styles.burgerMenu}>
            <div onClick={e => e.stopPropagation()}
                 style={{background: headerStyles.background, color: headerStyles.fontColor}}
                 className={isOpen ? [styles.burgerMenu__container, styles.burgerMenu__container_open].join(' ') : styles.burgerMenu__container}>
                <div className={styles.burgerMenu__closeBtn} onClick={closeBurgerMenu}>
                    <img src={CloseBtn} alt="Закрыть"/>
                </div>
                <nav className={styles.burgerMenu__navLinks} style={{color: navLinksStyle.color}}>
                    {pages && pages.map(page => (
                        <Link
                            onMouseEnter={e => onHoverIn(e)}
                            onMouseLeave={e => onHoverOut(e)}
                            key={page.id} to={'/page/' + page.slug}
                            className={styles.navLayout1__item}
                            style={{
                                color: navLinksStyle.color,
                                fontSize: navLinksStyle.fontSize,
                                fontWeight: 600,
                                margin: '1rem 0'
                            }}>
                            <div className={styles.navLayout1__overline}></div>
                            {page.navLink}
                            <div className={[styles.navLayout1__underline, 'underline'].join(' ')}></div>
                        </Link>
                    ))}
                </nav>
                <HeaderContacts containerClassName={styles.burgerMenu__contacts} headerStyles={headerStyles}/>
            </div>
        </div>
    );
};

export default HeaderBurgerMenu;
