import React, {useEffect, useState} from 'react';
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

    useEffect(()=>{
        if(!fields.length) addNewField()
    }, [fields.length])

    //methods
    const changeIconsOptionsContainerVisibility = (e: React.MouseEvent<HTMLDivElement>) => {
        const optionsContainer = e.currentTarget.nextSibling as HTMLElement;
        if (optionsContainer && optionsContainer.style) {
            optionsContainer.style.display === 'none'
                ? optionsContainer.style.display = 'flex'
                : optionsContainer.style.display = 'none'
        }
    }

    const changeIconTypesOptionsContainerVisibility = (e: React.MouseEvent<HTMLDivElement>) => {
        const optionsContainer = e.currentTarget.nextSibling as HTMLElement;
        if (optionsContainer && optionsContainer.style) {
            optionsContainer.style.display === 'none'
                ? optionsContainer.style.display = 'flex'
                : optionsContainer.style.display = 'none'
        }
    }

    const closeOptionsContainer = (e: React.ChangeEvent<HTMLInputElement>) => {
        const option = e.currentTarget.parentNode as HTMLElement;
        if (e.target.name === 'linkIcon' && option && option.parentNode) {
            const optionsContainer = option.parentNode as HTMLElement;
            if (optionsContainer && optionsContainer.style) optionsContainer.style.display = 'none'
        }
        if (e.target.name === 'linkIconType' && option && option.parentNode) {
            const optionsContainer = option.parentNode as HTMLElement;
            if (optionsContainer && optionsContainer.style) optionsContainer.style.display = 'none';

        }
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id.split('*')[1]);
        closeOptionsContainer(e)
        e.target.value === 'outlinedOriginal' || e.target.value === 'fulfilledOriginal'
            ? dispatch(updateSocialLink(decodeToken(localStorage.access), id, {
                [e.target.name]: e.target.value,
                socialLinkColor: 'original'
            }))
            : dispatch(updateSocialLink(decodeToken(localStorage.access), id, {
                [e.target.name]: e.target.value}))

    }

    const onChangeNewFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id.split('*')[1]);
        closeOptionsContainer(e)

        setFields(fields =>
            fields.map(item =>
                item.id === id
                    ? e.target.value === 'outlinedOriginal' || e.target.value === 'fulfilledOriginal'
                        ? {...item, [e.target.name]: e.target.value, socialLinkColor: 'original'}
                        : {...item, [e.target.name]: e.target.value}
                    : item
            )
        );
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
        if (newSocial.linkHref) {
            dispatch(createSocialLink(decodeToken(localStorage.access), {
                linkHref: newSocial.linkHref,
                linkIcon: newSocial.linkIcon,
                socialLinkColor: newSocial.socialLinkColor,
            }))
            deleteField(id)
        }
    }

    const saveAllFields = () => {
        fields.map(elem => {
            saveNewSocialLink(elem.id)
            deleteField(elem.id)
        })
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
                        changeIconTypesOptionsContainerVisibility={changeIconTypesOptionsContainerVisibility}
                        changeIconsOptionsContainerVisibility={changeIconsOptionsContainerVisibility}
                    />
                )}
                <NewSocialLinksForm
                    fields={fields}
                    deleteField={deleteField}
                    onChangeHandler={onChangeNewFieldHandler}
                    saveNewSocialLink={saveNewSocialLink}
                    changeIconTypesOptionsContainerVisibility={changeIconTypesOptionsContainerVisibility}
                    changeIconsOptionsContainerVisibility={changeIconsOptionsContainerVisibility}
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
