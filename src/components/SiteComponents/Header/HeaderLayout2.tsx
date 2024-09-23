import React from 'react';
import {Link} from "react-router-dom";
import styles from "../Layout.module.sass";
import HeaderContacts from "./HeaderContacts";
import HeaderNav from "./HeaderNav";

interface IHeaderLayout2Props {
    headerContainerClass: string;
    logo: string;
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>;
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>;
    navLinksStyle: { color: string; fontSize: number; hoverColor: string; hoverStyle: string }
    headerStyles: { background: string; fontColor: string; borderBottom: string; }
}

const HeaderLayout2: React.FC<IHeaderLayout2Props> = ({
                                                          headerContainerClass,
                                                          onHoverIn,
                                                          onHoverOut,
                                                          logo,
                                                          headerStyles,
                                                          navLinksStyle
                                                      }) => {
    return (
        <div className={headerContainerClass}>
            <Link to={'/'} className={styles.image__container}>{logo && (<img src={logo} alt={'logo'}/>)}</Link>
            <div className={styles.navLayout2} style={{color: headerStyles.fontColor}}>
                <HeaderContacts containerClassName={styles.contactItems__Layout2} headerStyles={headerStyles}/>
                <HeaderNav onHoverOut={onHoverOut} onHoverIn={onHoverIn}
                           navLinksStyle={navLinksStyle}/>
            </div>
        </div>
    );
};

export default HeaderLayout2;
