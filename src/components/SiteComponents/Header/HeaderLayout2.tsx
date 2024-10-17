import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.sass";
import HeaderContacts from "./HeaderContacts";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "../../UI/Icons/BurgerMenu";

interface IHeaderLayout2Props {
    headerContainerClass: string;
    logo: string;
    burgerClass: string
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>;
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>;
    navLinksStyle: { color: string; fontSize: string; hoverColor: string; hoverStyle: string }
    headerStyles: { background: string; fontColor: string; borderBottom: string; }
    openBurgerMenu: React.MouseEventHandler<SVGSVGElement>
}

const HeaderLayout2: React.FC<IHeaderLayout2Props> = ({openBurgerMenu,
                                                          burgerClass,
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
            <BurgerMenu iconColor={headerStyles.fontColor} classname={burgerClass} openBurgerMenu={openBurgerMenu}/>
        </div>
    );
};

export default HeaderLayout2;
