import React from 'react';
import styles from './Footer.module.sass';
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";
import FooterNavigation from "./FooterNavigation";
import {Link} from "react-router-dom";
import FooterContacts from "./FooterContacts";
import FooterCopyRights from "./FooterCopyRights";

interface IFooterLayout3Props {
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>;
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>;
    footerStyles: IFooterSettingsBase;
    logo: string | undefined
}

const FooterLayout3: React.FC<IFooterLayout3Props> = ({logo, footerStyles, onHoverOut, onHoverIn}) => {
    return (
        <div className={styles.footer__Layout3}>
            <div className={styles.footer__Layout3__container}>
                <div className={styles.footer__Layout3__LogoCopyrights}>
                    <Link to={'/'} className={styles.footer__Layout3__LogoCopyrights__imageContainer}>{logo && (<img src={logo} alt={'logo'}/>)}</Link>
                    {footerStyles.copyrightsContent && (<FooterCopyRights footerStyles={footerStyles}/>)}
                </div>
                <FooterNavigation linkClassName={styles.footer__navColumnItem}
                                  navClassName={styles.footer__navColumnItems} footerStyles={footerStyles}
                                  onHoverOut={onHoverOut} onHoverIn={onHoverIn}/>
                <FooterContacts footerStyles={footerStyles}/>
            </div>

        </div>
    );
};

export default FooterLayout3;
