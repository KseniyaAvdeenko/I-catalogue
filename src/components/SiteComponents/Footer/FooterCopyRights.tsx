import React from 'react';
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";
import styles from './Footer.module.sass';

const FooterCopyRights: React.FC<{ footerStyles: IFooterSettingsBase }> = ({footerStyles}) => {
    return (<div className={styles.footer__Layout1__copyrights} style={{borderTop: `.1rem solid ${footerStyles.borderTopColor}`}} >{footerStyles.copyrightsContent}</div>);
};

export default FooterCopyRights;
