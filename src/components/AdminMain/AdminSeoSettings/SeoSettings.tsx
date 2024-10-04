import React, {useState} from 'react';
import styles from '../AdminNavbar.module.sass'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import NewSeoTagForm from "./NewSeoTagForm";
import SavedSeoTags from "./SavedSeoTags";
import {ISeoSettings} from "../../../interface/ISeoSettings";
import {seoTagExample} from "../Options";
import {createSeoTag, deleteSeoTag, updateSeoTag} from "../../../store/actions/seoSettingsAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";

const SeoSettings = () => {
    const dispatch = useAppDispatch();
    const {isLoading, error, seoTag, seoTags} = useAppSelector(state => state.seoSettingsReducer)
    //---states
    const [fields, setFields] = useState<ISeoSettings[]>([seoTagExample])

    //methods
    const addNewField = () => {
        const newField = structuredClone(seoTagExample);
        newField.id = fields.length
        setFields([...fields, newField])
    }

    const saveAllFields = () => fields.map(field => saveNewSeoTagHandler(field.id))

    const onChangeSavedSeoTagsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id: number = parseInt(e.target.id.split('*')[1])
        e.target.name === 'code'
            ? dispatch(updateSeoTag(id, decodeToken(localStorage.access), {[e.target.name]: e.target.value, tagName: '', content: '', property: ''}))
            : dispatch(updateSeoTag(id, decodeToken(localStorage.access), {[e.target.name]: e.target.value, code: ''}))
    }

    const deleteSavedSeoTag = (id: number) => dispatch(deleteSeoTag(id, decodeToken(localStorage.access)))

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id: number = parseInt(e.target.id.split('*')[1])
        setFields(fields =>
            fields.map(el =>
                el.id === id
                    ? e.target.name === 'code'
                        ? {...el, [e.target.name]: e.target.value, tagName: '', content: '', property: ''}
                        : {...el, [e.target.name]: e.target.value, code: ''}
                    : el
            ))
    }

    const saveNewSeoTagHandler = (id: number) => {
        const newTag = structuredClone(fields.find(el => el.id === id))
        dispatch(createSeoTag(decodeToken(localStorage.access), {
            tag: newTag.tag,
            tagName: newTag.tagName,
            code: newTag.code,
            content: newTag.content,
            property: newTag.property
        }))
        deleteField(id)
    }

    const deleteField = (id: number) => setFields(fields.filter(el => el.id !== id))

    return (
        <main className={styles.AdminNavbar}>
            <section className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
                <h2 className={styles.AdminNavbar__heading}>Настройки SEO сайта</h2>
                <div className={styles.AdminNavbar__formContainer}>
                    {seoTags && (
                        <SavedSeoTags
                            seoTags={seoTags}
                            isLoading={isLoading}
                            onChangeHandler={onChangeSavedSeoTagsHandler}
                            deleteSeoTag={deleteSavedSeoTag}
                        />
                    )}
                    <NewSeoTagForm onChangeHandler={onChangeHandler}
                                   saveNewSeoTag={saveNewSeoTagHandler}
                                   deleteField={deleteField}
                                   fields={fields}/>
                    <button className={styles.AdminNavbar__button} onClick={addNewField}>Добавить поле</button>
                    <button className={styles.AdminNavbar__button} style={{marginTop: '2rem'}}
                            onClick={saveAllFields}>Сохранить все SEO теги
                    </button>
                </div>
            </section>
        </main>
    );
};

export default SeoSettings;
