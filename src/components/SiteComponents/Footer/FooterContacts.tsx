import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import styles from '../Layout.module.sass';
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";
import {Link} from "react-router-dom";

const FooterContacts: React.FC<{ footerStyles: IFooterSettingsBase; }> = ({footerStyles}) => {
    const {contacts} = useAppSelector(state => state.contactsReducer)
    return (
        <div className={styles.footer__contactsItems}>
            {contacts && contacts.map(contact => (
                contact.isLink && contact.linkHref && contact.linkType !== 'none' && contact.linkType !== 'address'
                    ? <Link key={contact.id} target={'_blank'}
                            style={{
                                color: footerStyles.fontColor,
                                fontSize: footerStyles.contactsFontSize
                            }}
                            to={`${contact.linkType}:${contact.linkHref}`}
                            className={styles.footer__contactsItem}>{contact.content}</Link>
                    : <div key={contact.id} style={{
                        color: footerStyles.fontColor,
                        fontSize: footerStyles.contactsFontSize
                    }} className={styles.contactsItem__Layout1}>{contact.content}</div>
            ))}
        </div>
    );
};

export default FooterContacts;
