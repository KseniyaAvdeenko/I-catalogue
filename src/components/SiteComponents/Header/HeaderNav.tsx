import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import styles from "./Header.module.sass";
import {Link} from "react-router-dom";

interface IHeaderNavProps {
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>
    navLinksStyle: { color: string; fontSize: number; hoverColor: string; hoverStyle: string }
}

const HeaderNav: React.FC<IHeaderNavProps> = ({onHoverOut, onHoverIn, navLinksStyle}) => {
    const {pages} = useAppSelector(state => state.pageSettingsReducer)
    return (
        <nav className={styles.navLayout1} style={{color: navLinksStyle.color}}>
            {pages && pages.map(page => (
                <Link
                    onMouseEnter={e => onHoverIn(e)}
                    onMouseLeave={e => onHoverOut(e)}
                    key={page.id} to={'/page/' + page.slug}
                    className={styles.navLayout1__item}
                    style={{color: navLinksStyle.color, fontSize: navLinksStyle.fontSize, fontWeight: 600}}>
                    <div className={styles.navLayout1__overline}></div>
                    {page.navLink}
                    <div className={[styles.navLayout1__underline, 'underline'].join(' ')}></div>
                </Link>
            ))}
        </nav>
    );
};

export default HeaderNav;
