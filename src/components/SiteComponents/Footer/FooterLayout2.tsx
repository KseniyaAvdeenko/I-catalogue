import React from 'react';
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";
import styles from '../Layout.module.sass';
import FooterCopyRights from "./FooterCopyRights";
import FooterNavigation from "./FooterNavigation";

interface IFooterLayout2Props {
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>;
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>;
    footerStyles: IFooterSettingsBase;
}

const FooterLayout2: React.FC<IFooterLayout2Props> = ({footerStyles, onHoverOut, onHoverIn}) => {
    return (
        <div className={styles.footer__Layout2}>
            <div className={styles.footer__Layout2__container}>
                <FooterNavigation onHoverOut={onHoverOut} onHoverIn={onHoverIn}
                              footerStyles={footerStyles}
                              navClassName={styles.footer__navRowItems}
                              linkClassName={styles.footer__navRowItem}/>
            </div>
            {footerStyles.copyrightsContent && (<FooterCopyRights footerStyles={footerStyles}/>)}
        </div>
    );
};

export default FooterLayout2;
