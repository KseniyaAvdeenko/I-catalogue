import React from 'react';
import styles from './Footer.module.sass';
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";
import FooterNavigation from "./FooterNavigation";
import {Link} from "react-router-dom";
import FooterContacts from "./FooterContacts";
import FooterCopyRights from "./FooterCopyRights";

interface IFooterLayout1Props {
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>;
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>;
    footerStyles: IFooterSettingsBase;
    logo: string | undefined
}

const FooterLayout1: React.FC<IFooterLayout1Props> = ({logo, footerStyles, onHoverOut, onHoverIn}) => {
    return (
        <div className={styles.footer__Layout1}>
            <div className={styles.footer__Layout1__container}>
                <FooterNavigation linkClassName={styles.footer__navColumnItem} navClassName={styles.footer__navColumnItems} footerStyles={footerStyles} onHoverOut={onHoverOut} onHoverIn={onHoverIn}/>
                <Link to={'/'} className={styles.image__container}>{logo && (<img src={logo} alt={'logo'}/>)}</Link>
                <FooterContacts footerStyles={footerStyles}/>
            </div>
            {footerStyles.copyrightsContent && (<FooterCopyRights footerStyles={footerStyles}/>)}
        </div>
    );
};

export default FooterLayout1;
