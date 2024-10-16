import React, {useEffect, useState} from 'react';
import styles from '../AdminMain.module.sass'
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loadPageWithNavLink, updatePageWithNavLink} from "../../../store/actions/pageSettingsAction";
import PageProdBackground from "./PageProdBackground";
import PageHeadingContent from "./PageHeadingContent";
import {IOptions} from "../../../interface/IAdminPageComponets";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";
import PageContent from "./PageContent";
import AdminInputContainer from "../../UI/InputContainers/AdminInputContainer";
import HeadingType from "../HeadingType";
import Loader from "../../UI/Loader/Loader";
import PageBorderColor from "./PageBorderColor";
import PageBorderWidth from "./PageBorderWidth";
import pageProdBackground from "./PageProdBackground";
import PageCardBorder from "./PageCardBorder";


const PagesSettings = () => {
    const {slug} = useParams();
    const {page, isLoading} = useAppSelector(state => state.pageSettingsReducer);
    const dispatch = useAppDispatch()

    //states
    const [headingTypeOptionsVisibility, setHeadingTypeOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', top: '8rem'
    })

    //methods
    useEffect(() => {
        if (slug) dispatch(loadPageWithNavLink(slug))
    }, [slug])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (slug && page) {
            const pageRequiredFields = {headingSettings: page.headingSettings}
            dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                Object.assign({
                        [e.target.name]: e.target.type === 'checkbox'
                            ? e.target.checked
                            : e.target.type === 'number'
                                ? parseInt(e.target.value)
                                : e.target.value
                    },
                    pageRequiredFields
                )))
        }
    }
    const onChangeHeadingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (slug && page) {
            e.target.name === 'headingContent'
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
                            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
                            headingContent: page.headingSettings.headingContent
                        }
                    }
                ))

        }
        if (e.target.name === 'blockHeadingType') setHeadingTypeOptionsVisibility({
            ...headingTypeOptionsVisibility,
            open: false,
            display: 'none'
        })
    }

    const changeHeadingTypeOptionsContainerVisibility = () => {
        headingTypeOptionsVisibility.open
            ? setHeadingTypeOptionsVisibility({
                ...headingTypeOptionsVisibility,
                open: false,
                display: 'none'
            })
            : setHeadingTypeOptionsVisibility({
                ...headingTypeOptionsVisibility,
                open: true,
                display: 'flex'
            })
    }

    return (
        <div className={styles.AdminMain}>
            <section className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
                <h2 className={styles.AdminMain__heading}>Настройка и контент страницы</h2>
                <h3 className={styles.AdminMain__subheading}>Настройка страницы {page?.navLink}</h3>
                {page
                    ? <div className={styles.AdminMain__formContainer}>
                        <div className={styles.form__items}>
                            <AdminInputContainer
                                type={'color'} name={'background'} inputId={'background'}
                                value={page.background} checked={false} required={false}
                                readonly={false} inputClassname={''} label={`Фон страницы ` + page.navLink}
                                inputContainerClassname={styles.form__inputContainer}
                                labelClassName={''} onChangeHandler={onChangeHandler}
                            />
                            <AdminInputContainer
                                type={'checkbox'} name={'isBlockWithProds'} inputId={'isBlockWithProds'}
                                value={''} checked={page.isBlockWithProds} onChangeHandler={onChangeHandler}
                                required={false} readonly={false} inputClassname={''}
                                inputContainerClassname={styles.form__inputContainer}
                                labelClassName={''} label={'Является ли станица каталогом товаров/услуг'}
                            />
                            <PageProdBackground
                                value={page.prodBackground} checked={false} inputClass={''}
                                onChangeHandler={onChangeHandler} label={'Фон карточки товара/услуги'}
                                inputId={'prodBackground'} name={'prodBackground'} readonly={false}
                                isBlockWithProds={page.isBlockWithProds} required={false} type={'color'}
                            />
                            <PageCardBorder
                                type={'checkbox'} name={'cardBorder'} inputId={'cardBorder'} value={''}
                                checked={page.cardBorder} required={false} readonly={false}
                                label={'Граница карточки товара/услуги'} inputClass={''}
                                isBlockWithProds={page.isBlockWithProds} onChangeHandler={onChangeHandler}/>

                            <PageBorderColor
                                cardBorder={page.cardBorder} type={'color'} name={'cardBorderColor'}
                                id={'cardBorderColor'} value={page.cardBorderColor} checked={false} required={false}
                                readonly={false} inputClass={''} onChangeHandler={onChangeHandler}/>
                            <PageBorderWidth
                                type={'number'} name={'cardBorderWidth'} id={'cardBorderWidth'}
                                value={page.cardBorderWidth} checked={false} required={false} readonly={false}
                                inputClass={''} cardBorder={page.cardBorder} min={1} onChangeHandler={onChangeHandler}/>
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

        </div>
    );
}

export default PagesSettings;
