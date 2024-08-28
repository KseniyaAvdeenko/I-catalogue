import React, {useState} from 'react';
import styles from "../AdminNavbar.module.sass";
import {useAppSelector} from "../../../../hooks/redux";
import {IContactField} from "../../../../interface/IFields";
import {contactFieldExample} from "../../Options";

const ContactsForm = () => {

    const {isLoadingContacts, contact, errorContacts, contacts} = useAppSelector(state => state.navbarReducer)
    //---states
    const [fields, setFields] = useState<IContactField[]>([contactFieldExample])
    console.log(fields)
    return (
        <section id={'contactsSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h2 className={styles.AdminNavbar__heading}>Контакты</h2>
            <div className={styles.AdminNavbar__formContainer}>
                {contacts &&
                    <div className={styles.savedItems}>
                        {isLoadingContacts && 'Loading...'}
                        {contacts.map(contact => (
                            <div className={styles.savedItems__items}>
                                <div>{contact.content}</div>
                                <div>{contact.isLink}</div>
                                <div>{contact.linkHref}</div>
                                <div>{contact.linkType}</div>
                                <div>save</div>
                                <div>delete</div>
                            </div>
                        ))}
                    </div>}
                <div className={styles.formItems}>

                </div>
                <button className={styles.AdminNavbar__button}>Добавить</button>
            </div>
        </section>
    );
};

export default ContactsForm;
