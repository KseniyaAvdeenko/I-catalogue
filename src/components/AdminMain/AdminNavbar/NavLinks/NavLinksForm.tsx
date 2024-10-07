import React, {useEffect, useState} from 'react';
import styles from "../../AdminNavbar.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import SavedNavLinks from "./SavedNavLinks";
import NewNavLinkForm from "./NewNavLinkForm";
import {navLinkFieldExample} from "../../Options";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import {slugify} from "transliteration";
import {
    createPageWithNavLink,
    deletePageWithNavLink
} from "../../../../store/actions/pageSettingsAction";
import {INavLink} from "../../../../interface/IAdminPageComponets";
import Loader from "../../../UI/Loader/Loader";

const NavLinksForm = () => {
    const dispatch = useAppDispatch();
    const {isLoading, error, pages} = useAppSelector(state => state.pageSettingsReducer)
    //states
    const [fields, setFields] = useState<INavLink[]>([navLinkFieldExample])

    //methods
    useEffect(() => {
        if (!fields.length) addNewField()
    }, [fields.length])


    function addNewField() {
        const newField: INavLink = structuredClone(navLinkFieldExample)
        newField.id = fields.length
        setFields([...fields, newField])
    }

    const deleteField = (id: number) => setFields(fields.filter(el => el.id !== id))

    const deleteNavigationLink = (slug: string) => dispatch(deletePageWithNavLink(decodeToken(localStorage.access), slug))

    const onChangeNewNavLinkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.name === 'navLink'
            ? setFields(fields =>
                fields.map(field =>
                    field.id === parseInt(e.target.id.split('*')[1])
                        ? {...field, [e.target.name]: e.target.value, slug: slugify(e.target.value)}
                        : field
                )
            )
            : setFields(fields =>
                fields.map(field =>
                    field.id === parseInt(e.target.id.split('*')[1])
                        ? {...field, [e.target.name]: e.target.value}
                        : field
                )
            )
    }

    const saveNavLink = (id: number) => {
        const newPage = structuredClone(fields.find(el => el.id === id))
        if (newPage.navLink) {
            dispatch(createPageWithNavLink(decodeToken(localStorage.access),
                {
                    navLink: newPage.navLink,
                    slug: newPage.slug,
                    headingSettings: {headingContent: `Заголовок страницы ${newPage.navLink}`}
                }))
            deleteField(id)
        }
    }

    const saveAllFields = () => fields.map(elem => saveNavLink((elem.id)))

    return (
        <section id={'navLinksSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h2 className={styles.AdminNavbar__heading}>Навигационные ссылки</h2>
            <div className={styles.AdminNavbar__formContainer}>
                {pages
                    ?<SavedNavLinks
                        pages={pages}
                        deleteNavLink={deleteNavigationLink}
                    />
                    :<div className={styles.savedItems_UnLoaded}>{isLoading && (<Loader/>)}</div>
                }
                <NewNavLinkForm
                    fields={fields}
                    onChangeHandler={onChangeNewNavLinkHandler}
                    deleteField={deleteField}
                    saveNewLink={saveNavLink}
                />
                <button className={styles.AdminNavbar__button} onClick={addNewField}> Добавить поле</button>
                <button className={styles.AdminNavbar__button} style={{marginTop: '2rem'}}
                        onClick={saveAllFields}>Сохранить все навигационные ссылки
                </button>
            </div>
        </section>
    );
};

export default NavLinksForm;
