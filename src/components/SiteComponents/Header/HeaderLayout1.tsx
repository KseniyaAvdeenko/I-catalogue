import React from 'react';
import {Link} from "react-router-dom";
import styles from "../Layout.module.sass";
import HeaderNav from "./HeaderNav";
import HeaderContacts from "./HeaderContacts";

interface IHeaderLayout1Props {
    headerContainerClass: string;
    logo: string;
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>
    navLinksStyle: { color: string; fontSize: number; hoverColor: string; hoverStyle: string }
    headerStyles: { background: string; fontColor: string; borderBottom: string; }
}

const HeaderLayout1: React.FC<IHeaderLayout1Props> = ({
                                                          headerContainerClass,
                                                          logo,
                                                          headerStyles,
                                                          navLinksStyle,
                                                          onHoverIn,
                                                          onHoverOut
                                                      }) => {
    return (
        <div className={headerContainerClass} style={{color: headerStyles.fontColor}}>
            <Link to={'/'} className={styles.image__container}>{logo && (<img src={logo} alt={'logo'}/>)}</Link>
            <HeaderNav onHoverOut={onHoverOut} onHoverIn={onHoverIn}
                       navLinksStyle={navLinksStyle}/>
            <HeaderContacts containerClassName={styles.contactItems__Layout1} headerStyles={headerStyles}/>
        </div>
    );
};

export default HeaderLayout1;
