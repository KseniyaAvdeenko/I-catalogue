import React, {useEffect, useState} from 'react';
import styles from '../AdminMain.module.sass'
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loadPageWithNavLink, updatePageWithNavLink} from "../../../store/actions/pageSettingsAction";
import PageBackground from "./PageBackground";
import PageProdBackground from "./PageProdBackground";
import PageHeadingContent from "./PageHeadingContent";
import {IOptions} from "../../../interface/IAdminPageComponets";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";
import PageContent from "./PageContent";
import AdminInputContainer from "../../UI/InputContainers/AdminInputContainer";
import HeadingType from "../HeadingType";
import Loader from "../../UI/Loader/Loader";


const PagesSettings = () => {
    const {slug} = useParams();
    const {page, isLoading} = useAppSelector(state => state.pageSettingsReducer);
    const dispatch = useAppDispatch()

    //states
    const [headingTypeOptionsVisibility, setHeadingTypeOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-20.2rem'
    })


    //methods
    useEffect(() => {
        if (slug) dispatch(loadPageWithNavLink(slug))
    }, [slug])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (slug && page && localStorage.access) {
            const pageRequiredFields = {headingSettings: page.headingSettings}
            if (e.target.type === 'checkbox') {
                dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                    Object.assign({[e.target.name]: e.target.checked}, pageRequiredFields)))
            } else {
                e.target.type === 'number'
                    ? dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                        Object.assign({[e.target.name]: parseInt(e.target.value)}, pageRequiredFields)))
                    : dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                        Object.assign({[e.target.name]: e.target.value}, pageRequiredFields)))
            }
        }
    }
    const onChangeHeadingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (slug && page) {
            e.target.type === 'number'
                ? dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                    {
                        headingSettings: {
                            id: page.headingSettings.id,
                            [e.target.name]: parseInt(e.target.value),
                            headingContent: page.headingSettings.headingContent
                        }
                    }
                ))
                : e.target.type === 'text'
                    ? dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                        {
                            headingSettings: {
                                [e.target.name]: e.target.value,
                                id: page.headingSettings.id
                            }
                        }))
                    : dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                        {
                            headingSettings: {
                                id: page.headingSettings.id,
                                [e.target.name]: e.target.value,
                                headingContent: page.headingSettings.headingContent
                            }
                        }))
        }
        if (e.target.name === 'blockHeadingType') setHeadingTypeOptionsVisibility({
            ...headingTypeOptionsVisibility,
            open: false,
            display: 'none',
            bottom: '-20.2rem'
        })
    }
    const changeHeadingTypeOptionsContainerVisibility = () => {
        headingTypeOptionsVisibility.open
            ? setHeadingTypeOptionsVisibility({
                ...headingTypeOptionsVisibility,
                open: false,
                display: 'none',
                bottom: '-20.2rem'
            })
            : setHeadingTypeOptionsVisibility({
                ...headingTypeOptionsVisibility,
                open: true,
                display: 'flex',
                bottom: '-20.2rem'
            })
    }
    return (
        <main className={styles.AdminMain}>
            <section className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
                <h2 className={styles.AdminMain__heading}>Настройка и контент страницы</h2>
                <h3 className={styles.AdminMain__subheading}>Настройка страницы {page?.navLink}</h3>
                {page
                    ? <div className={styles.AdminMain__formContainer}>
                        <div className={styles.form__items}>
                            <PageBackground pageName={page.navLink} background={page.background}
                                            onChangeHandler={onChangeHandler}/>
                            <AdminInputContainer
                                type={'checkbox'} name={'isBlockWithProds'} inputId={'isBlockWithProds'}
                                value={''} checked={page.isBlockWithProds}
                                required={false} readonly={false} inputClassname={''}
                                inputContainerClassname={styles.form__inputContainer}
                                labelClassName={''} label={'Является ли станица каталогом товаров/услуг'}
                                onChangeHandler={onChangeHandler}/>
                            <PageProdBackground prodBackground={page.prodBackground}
                                                isBlockWithProds={page.isBlockWithProds}
                                                onChangeHandler={onChangeHandler}/>
                        </div>
                        <div className={styles.form__items}>
                            <PageHeadingContent headingContent={page.headingSettings.headingContent}
                                                pageName={page.navLink}
                                                onChangeHandler={onChangeHeadingHandler}/>
                            <HeadingType
                                blockHeadingType={page.headingSettings.blockHeadingType}
                                headingTypeOptionsVisibility={headingTypeOptionsVisibility}
                                onChangeHandler={onChangeHeadingHandler}
                                changeHeadingTypeOptionsContainerVisibility={changeHeadingTypeOptionsContainerVisibility}
                            />
                        </div>
                        <div className={styles.form__items}>
                            <AdminInputContainer
                                type={'color'} name={'headingFontColor'} inputId={'headingFontColor'}
                                value={page.headingSettings.headingFontColor}
                                checked={false} required={false} readonly={false} inputClassname={''}
                                inputContainerClassname={styles.form__inputContainer}
                                labelClassName={''} label={'Цвет заголовка'}
                                onChangeHandler={onChangeHeadingHandler}/>
                            <AdminInputContainer
                                type={'number'} name={'headingFontSize'} inputId={'headingFontSize'}
                                value={page.headingSettings.headingFontSize} checked={false}
                                required={false} readonly={false} inputClassname={''}
                                inputContainerClassname={styles.form__inputContainer}
                                labelClassName={''} label={'Размер шрифта заголовка'}
                                onChangeHandler={onChangeHeadingHandler}/>
                            <AdminInputContainer
                                type={'number'} name={'headingFontWeight'} inputId={'headingFontWeight'}
                                value={page.headingSettings.headingFontWeight} checked={false}
                                required={false} readonly={false} inputClassname={''} max={900}
                                inputContainerClassname={styles.form__inputContainer} min={400}
                                labelClassName={''} label={'Жирность текста заголовка'} step={100}
                                onChangeHandler={onChangeHeadingHandler}/>
                        </div>
                    </div>
                    : <div className={styles.AdminMain__formContainerUnLoaded}>{isLoading && <Loader/>}</div>
                }
            </section>

            <PageContent page={page}/>

        </main>
    );
}

export default PagesSettings;
