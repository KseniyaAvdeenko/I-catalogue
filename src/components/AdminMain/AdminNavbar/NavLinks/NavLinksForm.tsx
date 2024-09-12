import React, {useState} from 'react';
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
import {INavLink, INavLinkBase} from "../../../../interface/IAdminPageComponets";

const NavLinksForm = () => {
    const dispatch = useAppDispatch();
    const {isLoading, error, pages} = useAppSelector(state => state.pageSettingsReducer)

    const [fields, setFields] = useState<INavLink[]>([navLinkFieldExample])

    const [newNavLink, setNewNavLink] = useState<INavLinkBase>({navLink: '', slug: ''})

    function addNewField() {
        const newField: INavLink = structuredClone(navLinkFieldExample)
        newField.id = fields.length
        setFields([...fields, newField])
    }

    const deleteField = (id: number) => {
        setFields(fields.filter(el => el.id !== id))
    }

    const deleteNavigationLink = (slug: string) => {
        if (localStorage.access) {
            dispatch(deletePageWithNavLink(decodeToken(localStorage.access), slug))
        }
    }

    const onChangeNewNavLinkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'navLink') {
            setFields(fields =>
                fields.map(field =>
                    field.id === parseInt(e.target.id.split('*')[1])
                        ? {...field, [e.target.name]: e.target.value, slug: slugify(e.target.value)}
                        : field
                )
            )
            setNewNavLink({
                ...newNavLink,
                [e.target.name]: e.target.value,
                slug: slugify(e.target.value)
            })
        } else {
            setFields(fields =>
                fields.map(field =>
                    field.id === parseInt(e.target.id.split('*')[1])
                        ? {...field, [e.target.name]: e.target.value}
                        : field
                )
            )
            setNewNavLink({
                ...newNavLink,
                [e.target.name]: e.target.value,
            })
        }
    }

    const saveNavLink = (id: number) => {
        const newPage = {
            navLink: newNavLink.navLink,
            slug: newNavLink.slug,
            headingSettings: {headingContent: newNavLink.navLink},
        }
        if (localStorage.access) {
            dispatch(createPageWithNavLink(decodeToken(localStorage.access), newPage))
            if (fields.length === 1) {
                deleteField(id)
                addNewField()
            } else {
                deleteField(id)
            }
            setNewNavLink({...newNavLink, navLink: '', slug: ''})
        }
    }

    return (
        <section id={'navLinksSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h2 className={styles.AdminNavbar__heading}>Навигационные ссылки</h2>
            <div className={styles.AdminNavbar__formContainer}>
                {pages && (
                    <SavedNavLinks
                        pages={pages}
                        deleteNavLink={deleteNavigationLink}
                        isLoading={isLoading}
                    />
                )}
                {/*{pages && pages.length && (<hr className={styles.hr}/>)}*/}
                <NewNavLinkForm
                    fields={fields}
                    onChangeHandler={onChangeNewNavLinkHandler}
                    deleteField={deleteField}
                    saveNewLink={saveNavLink}
                />
                <button className={styles.AdminNavbar__button} onClick={addNewField}> Добавить</button>
            </div>
        </section>
    )
        ;
};

export default NavLinksForm;
