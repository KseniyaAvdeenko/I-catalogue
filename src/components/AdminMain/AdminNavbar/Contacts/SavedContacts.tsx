import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import {IContacts} from "../../../../interface/INavbar";
import styles from "../AdminNavbar.module.sass";
import ContactContentInput from "./ContactContentInput";
import ContactIsLinkInput from "./ContactIsLinkInput";
import ContactLinkHref from "./ContactLinkHref";
import ContactLinkType from "./ContactLinkType";
import DeleteIcon from '../../../../assets/img/deleteIcon.png'

interface ISavedContactsProps extends IAdminComponentsProps {
    contacts: IContacts[] | null;
    deleteSavedContact: Function
}

const SavedContacts: React.FC<ISavedContactsProps> = ({deleteSavedContact, isLoading, contacts, onChangeHandler}) => {
    return (
        <div className={styles.savedItems}>
            {isLoading && 'Loading...'}
            {contacts && contacts.map(contact => (
                <div key={contact.id} className={styles.savedItems__items}>
                    <ContactContentInput
                        label={'Контакт'}
                        id={`content*${contact.id}`}
                        type={'text'}
                        name={'content'}
                        onChangeHandler={onChangeHandler}
                        required={true}
                        value={contact.content}
                    />
                    <ContactIsLinkInput
                        id={`isLink*${contact.id}`}
                        label={'Ссылка'}
                        classname={''}
                        type={'checkbox'}
                        name={'isLink'}
                        onChangeHandler={onChangeHandler}
                        required={true}
                        checked={contact.isLink}
                    />
                    <ContactLinkHref
                        isLink={contact.isLink}
                        id={`linkHref*${contact.id}`}
                        label={'Ссылка'}
                        type={'text'}
                        name={'linkHref'}
                        onChangeHandler={onChangeHandler}
                        required={false}
                        value={contact.linkHref ?? ''}
                    />
                    <ContactLinkType
                        label={'Тип ссылки'}
                        onChangeHandler={onChangeHandler}
                        contactLinkType={contact.linkType}
                        contactId={contact.id}
                    />
                    <img src={DeleteIcon} alt="delete icon" onClick={() => deleteSavedContact(contact.id)}/>
                </div>
            ))}
        </div>
    );
};

export default SavedContacts;
