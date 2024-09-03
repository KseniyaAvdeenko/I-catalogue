import React, {useState} from 'react';
import styles from "../AdminNavbar.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import SavedNavLinks from "./SavedNavLinks";
import NewNavLinkForm from "./NewNavLinkForm";
import {INavLinks, INavLinksBase} from "../../../../interface/INavbar";
import {navLinkFieldExample} from "../../Options";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import {slugify} from "transliteration";
import {createNavLink, deleteNavLink, updateNavLink} from "../../../../store/actions/navLinksAction";

const NavLinksForm = () => {
    const dispatch = useAppDispatch();
    const {isLoading, error, navLinks} = useAppSelector(state => state.navLinksReducer)

    const [fields, setFields] = useState<INavLinks[]>([navLinkFieldExample])

    const [newNavLink, setNewNavLink] = useState<INavLinksBase>({navLink: '', correspondingPageName: ''})

    function addNewField() {
        const newField: INavLinks = structuredClone(navLinkFieldExample)
        newField.id = fields.length
        setFields([...fields, newField])
    }

    const deleteField = (id: number) => {
        setFields(fields.filter(el => el.id !== id))
    }

    const deleteNavigationLink = (id: number) => {
        if (localStorage.access) {
           dispatch(deleteNavLink(decodeToken(localStorage.access), id))
        }
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (localStorage.access) {
            dispatch(updateNavLink(decodeToken(localStorage.access), parseInt(e.target.id.split('*')[1]), {[e.target.name]: e.target.value}))
        }
    }
    const onChangeNewNavLinkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'navLink') {
            setFields(fields =>
                fields.map(field =>
                    field.id === parseInt(e.target.id.split('*')[1])
                        ? {...field, [e.target.name]: e.target.value, correspondingPageName: slugify(e.target.value)}
                        : field
                )
            )
            setNewNavLink({
                ...newNavLink,
                [e.target.name]: e.target.value,
                correspondingPageName: slugify(e.target.value)
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
        if (localStorage.access) {
            dispatch(createNavLink(decodeToken(localStorage.access), newNavLink))
            deleteField(id)
        }
    }

    return (
        <section id={'navLinksSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h2 className={styles.AdminNavbar__heading}>Навигационные ссылки</h2>
            <div className={styles.AdminNavbar__formContainer}>
                <SavedNavLinks
                    navLinks={navLinks}
                    deleteNavLink={deleteNavigationLink}
                    isLoading={isLoading}
                    onChangeHandler={onChangeHandler}
                />
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
