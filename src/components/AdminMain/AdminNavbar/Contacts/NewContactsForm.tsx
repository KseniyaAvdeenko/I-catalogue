import React from 'react';
import styles from "../../AdminNavbar.module.sass";
import ContactContentInput from "./ContactContentInput";
import ContactIsLinkInput from "./ContactIsLinkInput";
import ContactLinkHref from "./ContactLinkHref";
import DeleteIcon from "../../../../assets/img/deleteIcon.svg";
import SaveIcon from '../../../../assets/img/saveIcon.svg';
import ContactLinkType from "./ContactLinkType";
import {IContacts} from "../../../../interface/INavbar";

interface INewContactsFormProps {
    fields: IContacts[];
    onChangeHandler: Function;
    deleteField: Function;
    saveNewContact: Function;
}

const NewContactsForm: React.FC<INewContactsFormProps> = ({saveNewContact, deleteField, onChangeHandler, fields}) => {
    return (
        <div className={styles.formItems}>
            {fields && fields.map(field => (
                <div key={field.id} className={styles.formItems__items}>
                    <ContactContentInput
                        value={field.content}
                        label={'Контакт'}
                        id={'content*' + field.id}
                        type={'text'}
                        name={'content'}
                        onChangeHandler={onChangeHandler}
                        required={true}
                    />
                    <ContactIsLinkInput
                        id={'isLink*' + field.id}
                        label={'Ссылка'}
                        classname={''}
                        type={'checkbox'}
                        name={'isLink'}
                        onChangeHandler={onChangeHandler}
                        required={true}
                        checked={field.isLink}
                    />
                    <ContactLinkHref
                        isLink={field.isLink}
                        id={'linkHref*' + field.id}
                        label={'Ссылка'}
                        type={'text'}
                        name={'linkHref'}
                        onChangeHandler={onChangeHandler}
                        required={false}
                        value={field.linkHref}
                    />
                    <ContactLinkType
                        label={'Тип ссылки'}
                        contactId={field.id}
                        onChangeHandler={onChangeHandler}
                        contactLinkType={field.linkType}
                    />
                    <div style={{display: 'flex'}}>
                        <img src={SaveIcon} alt="save icon" onClick={() => saveNewContact(field.id)} style={{marginRight: '1rem'}}/>
                        <img src={DeleteIcon} alt="delete icon" onClick={() => deleteField(field.id)}/>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default NewContactsForm;
