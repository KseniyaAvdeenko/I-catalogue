import React, {FC} from 'react';
import styles from "../Layout.module.sass";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import {IHeaderSettings} from "../../../interface/ICommonSettings";

interface IHeaderContactsProps {
    containerClassName: string;
    headerStyles: { background: string; fontColor: string; borderBottom: string; }
}

const HeaderContacts: FC<IHeaderContactsProps> = ({containerClassName, headerStyles}) => {
    const {contacts} = useAppSelector(state => state.contactsReducer)
    const {headerSettings} = useAppSelector(state => state.headerSettingsReducer)
    return (
        <div className={containerClassName} style={{borderBottom: contacts && contacts.length && headerSettings?.headerLayout === '2'  ? `.1rem solid ${headerSettings?.headerBottomBorderColor ?? '#333'}` :'none'}}>
            {contacts && contacts.map(contact => (
                contact.isLink && contact.linkHref && contact.linkType !== 'none' && contact.linkType !== 'address'
                    ? <Link key={contact.id} target={'_blank'}
                            style={{
                                color: headerStyles.fontColor,
                                fontSize: headerSettings?.contactsFontSize ?? 16
                            }}
                            to={`${contact.linkType}:${contact.linkHref}`}
                            className={styles.contactsItem__Layout1}>{contact.content}</Link>
                    : <div key={contact.id} style={{
                        color: headerStyles.fontColor,
                        fontSize: headerSettings?.contactsFontSize ?? 16
                    }} className={styles.contactsItem__Layout1}>{contact.content}</div>

            ))}
        </div>
    );
};

export default HeaderContacts;
