import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {ISocialLink} from "../../../../interface/INavbar";
import {socialLinkExample} from "../../Options";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import styles from "../../AdminNavbar.module.sass";
import SavedSocialLinks from "./SavedSocialLinks";
import {createSocialLink, deleteSocialLink, updateSocialLink} from "../../../../store/actions/socialLinksAction";
import NewSocialLinksForm from "./NewSocialLinksForm";

const SocialLinksForm = () => {
    const dispatch = useAppDispatch();
    const {isLoading, error, socialLinks} = useAppSelector(state => state.socialLinkReducer)
    //---states
    const [fields, setFields] = useState<ISocialLink[]>([socialLinkExample])

    //methods
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.target.type === 'checkbox'
        //     ? dispatch(updateSocialLink(decodeToken(localStorage.access), parseInt(e.target.id.split('*')[1]), {[e.target.name]: e.target.checked}))
        //     : dispatch(updateSocialLink(decodeToken(localStorage.access), parseInt(e.target.id.split('*')[1]), {[e.target.name]: e.target.value}))
    }

    const onChangeNewFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if (e.target.type === 'checkbox') {
        //     setFields(fields =>
        //         fields.map(item =>
        //             item.id === parseInt(e.target.id.split('*')[1]) ? {
        //                 ...item,
        //                 [e.target.name]: e.target.checked
        //             } : item
        //         )
        //     );
        // } else {
        //     setFields(fields =>
        //         fields.map(item =>
        //             item.id === parseInt(e.target.id.split('*')[1])
        //                 ? {...item, [e.target.name]: e.target.value}
        //                 : item
        //         )
        //     );
        // }
    }

    const deleteSavedSocialLink = (id: number) => dispatch(deleteSocialLink(id, decodeToken(localStorage.access)))

    const deleteField = (id: number) => setFields(fields.filter(el => el.id !== id))

    const addNewField = () => {
        const newField: ISocialLink = structuredClone(socialLinkExample)
        newField.id = fields.length
        setFields([...fields, newField])
    }

    const saveNewSocialLink = (id: number) => {
        const newSocial = structuredClone(fields.find(el => el.id === id))
        dispatch(createSocialLink(decodeToken(localStorage.access), {
            linkHref: newSocial.linkHref,
            linkIcon: newSocial.linkIcon,
            socialLinkColor: newSocial.socialLinkColor,
        }))
        deleteField(id)
    }

    const saveAllFields = () => {
        fields.map(elem => {
            if (elem.linkHref) saveNewSocialLink(elem.id)
        })
        addNewField()
    }

    return (
        <section id={'socialLinksSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h2 className={styles.AdminNavbar__heading}>Социальные ссылки-иконки</h2>
            <div className={styles.AdminNavbar__formContainer}>
                {socialLinks && (
                    <SavedSocialLinks
                        socialLinks={socialLinks}
                        isLoading={isLoading}
                        onChangeHandler={onChangeHandler}
                        deleteSavedSocialLink={deleteSavedSocialLink}
                    />
                )}
                <NewSocialLinksForm
                    fields={fields}
                    deleteField={deleteField}
                    onChangeHandler={onChangeNewFieldHandler}
                    saveNewSocialLink={saveNewSocialLink}
                />
                <button className={styles.AdminNavbar__button} onClick={addNewField}>Добавить поле</button>
                <button className={styles.AdminNavbar__button} style={{marginTop: '2rem'}}
                        onClick={saveAllFields}>Сохранить все социальные ссылки
                </button>
            </div>
        </section>
    );
};

export default SocialLinksForm;
