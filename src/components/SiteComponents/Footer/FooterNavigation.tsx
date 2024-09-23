import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import {Link} from "react-router-dom";
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";


interface IFooterNavProps {
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>;
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>;
    footerStyles: IFooterSettingsBase;
    navClassName: string;
    linkClassName: string;
}

const FooterNavigation: React.FC<IFooterNavProps> = ({linkClassName, navClassName, onHoverIn, onHoverOut, footerStyles}) => {
    const {pages} = useAppSelector(state => state.pageSettingsReducer)
    return (
        <nav className={navClassName}>
            {pages && pages.map(page => (
                <Link to={`page/` + page.slug} key={page.id}
                      onMouseEnter={e=>onHoverIn(e)}
                      onMouseLeave={e=>onHoverOut(e)}
                      className={linkClassName}
                      style={{fontSize: footerStyles.navLinksFontSize, color: footerStyles.fontColor}}
                >{page.navLink}</Link>
            ))}
        </nav>
    );
};

export default FooterNavigation;
