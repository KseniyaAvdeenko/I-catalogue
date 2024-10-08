import React, {useEffect, useState} from 'react';
import styles from "../../AdminNavbar.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {contactFieldExample} from "../../Options";
import SavedContacts from "./SavedContacts";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import NewContactsForm from "./NewContactsForm";
import {IContacts} from "../../../../interface/INavbar";
import {createContact, deleteContact, updateContact} from "../../../../store/actions/contactsAction";
import Loader from "../../../UI/Loader/Loader";

const ContactsForm = () => {
    const dispatch = useAppDispatch();
    const {isLoading, contacts} = useAppSelector(state => state.contactsReducer)
    //---states
    const [fields, setFields] = useState<IContacts[]>([contactFieldExample])

    //methods
    useEffect(() => {
        if (!fields.length) addNewField()
    }, [fields.length])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.type === 'checkbox'
            ? dispatch(updateContact(decodeToken(localStorage.access), parseInt(e.target.id.split('*')[1]), {[e.target.name]: e.target.checked}))
            : dispatch(updateContact(decodeToken(localStorage.access), parseInt(e.target.id.split('*')[1]), {[e.target.name]: e.target.value}))
    }

    const onChangeNewFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields(fields =>
            fields.map(item =>
                item.id === parseInt(e.target.id.split('*')[1]) ? {
                    ...item,
                    [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
                } : item
            )
        );
    }

    const deleteSavedContact = (id: number) => dispatch(deleteContact(decodeToken(localStorage.access), id))

    const deleteField = (id: number) => setFields(fields.filter(el => el.id !== id))

    const addNewField = () => {
        const newField: IContacts = structuredClone(contactFieldExample)
        newField.id = fields.length
        setFields([...fields, newField])
    }

    const saveNewContact = (id: number) => {
        const newContact = structuredClone(fields.find(el => el.id === id))
        dispatch(createContact(decodeToken(localStorage.access), {
            content: newContact.content,
            isLink: newContact.isLink,
            linkHref: newContact.linkHref,
            linkType: newContact.linkType
        }))
        deleteField(id)
    }

    const saveAllFields = () => fields.map(elem => {
        if (elem.content) saveNewContact(elem.id)
    })


    return (
        <section id={'contactsSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h2 className={styles.AdminNavbar__heading}>Контакты</h2>
            <div className={styles.AdminNavbar__formContainer}>
                {contacts
                    ?<SavedContacts
                        contacts={contacts}
                        onChangeHandler={onChangeHandler}
                        deleteSavedContact={deleteSavedContact}
                    />
                    :<div className={styles.savedItems_UnLoaded}>{isLoading && (<Loader/>)}</div>
                }
                <NewContactsForm
                    fields={fields}
                    deleteField={deleteField}
                    onChangeHandler={onChangeNewFieldHandler}
                    saveNewContact={saveNewContact}
                />
                <button className={styles.AdminNavbar__button} onClick={addNewField}>Добавить поле</button>
                <button className={styles.AdminNavbar__button} style={{marginTop: '2rem'}}
                        onClick={saveAllFields}>Сохранить все контакты
                </button>
            </div>
        </section>
    );
};

export default ContactsForm;
