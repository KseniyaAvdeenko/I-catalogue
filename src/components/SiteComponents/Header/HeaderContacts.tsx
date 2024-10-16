import React, {FC} from 'react';
import styles from "./Header.module.sass";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import PhoneIcon from "../../UI/Icons/PhoneIcon";
import EmailIcon from "../../UI/Icons/EmailIcon";
import GeoIcon from "../../UI/Icons/GeoIcon";
import SocialLinks from "../SocialLinks";

interface IHeaderContactsProps {
    containerClassName: string;
    headerStyles: { background: string; fontColor: string; borderBottom: string; }
}

const HeaderContacts: FC<IHeaderContactsProps> = ({containerClassName, headerStyles}) => {
    const {contacts} = useAppSelector(state => state.contactsReducer)
    const {headerSettings} = useAppSelector(state => state.headerSettingsReducer)
    return (
        <div className={containerClassName}
             style={{borderBottom: contacts && contacts.length && headerSettings?.headerLayout === '2' ? `.1rem solid ${headerSettings?.headerBottomBorderColor ?? '#333'}` : 'none'}}>
            <nav>
                {contacts && contacts.map(contact => (
                    contact.isLink && contact.linkHref && contact.linkType !== 'none' && contact.linkType !== 'address'
                        ? <Link key={contact.id} target={'_blank'}
                                style={{
                                    color: headerStyles.fontColor,
                                    fontSize: headerSettings?.contactsFontSize ? `clamp(1.3rem, 1.6rem, ${headerSettings?.contactsFontSize}px)` : 16
                                }}
                                to={`${contact.linkType}:${contact.linkHref}`}
                                className={styles.contactsItem__Layout1}>
                            {contact.linkType === 'tel' && (
                                <PhoneIcon color={headerStyles.fontColor}
                                           fontSize={headerSettings?.contactsFontSize ?? 16}/>)}
                            {contact.linkType === 'mailto' && (
                                <EmailIcon color={headerStyles.fontColor}
                                           fontSize={headerSettings?.contactsFontSize ?? 16}/>)}
                            {contact.content}
                        </Link>
                        : <div key={contact.id} style={{
                            color: headerStyles.fontColor,
                            fontSize: headerSettings?.contactsFontSize ? `clamp(1.3rem, 1.6rem, ${headerSettings?.contactsFontSize}px)` : 16
                        }} className={styles.contactsItem__Layout1}>
                            {contact.linkType === 'address' && (
                                <GeoIcon color={headerStyles.fontColor}
                                         fontSize={headerSettings?.contactsFontSize ?? 16}/>)}
                            {contact.content}</div>
                ))}
            </nav>
            <SocialLinks
                socialItemsClass={styles.socialLinks__items}
                socialItemClass={styles.socialLinks__item}
            />
        </div>
    );
};

export default HeaderContacts;
