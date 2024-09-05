import React, {useEffect, useState} from 'react';
import styles from '../AdminMain.module.sass'
import Markdown from "react-markdown";
import MarkdownEditor from '@uiw/react-markdown-editor';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loadPageWithNavLink, updatePageWithNavLink} from "../../../store/actions/pageSettingsAction";
import PageBackground from "./PageBackground";
import PageIsBlockWithProds from "./PageIsBlockWithProds";
import PageProdBackground from "./PageProdBackground";
import PageHeadingFontSize from "./PageHeadingFontSize";
import PageHeadingFontColor from "./PageHeadingFontColor";
import PageHeadingFontWeight from "./PageHeadingFontWeight";
import PageHeadingContent from "./PageHeadingContent";
import PageHeadingType from "./PageHeadingType";
import {IOptions} from "../../../interface/IAdminPageComponets";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";
import PageCardQuantityInRow from "./PageCardQuantityInRow";


const PagesSettings = () => {
    const {slug} = useParams();
    const {page, error, isLoading} = useAppSelector(state => state.pageSettingsReducer);
    const dispatch = useAppDispatch()
    console.log(page)
    const [headingTypeOptionsVisibility, setHeadingTypeOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-56.2rem'
    })
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
        if (slug && page && localStorage.access) {
            if (e.target.type === 'number') {
                dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                    {
                        headingSettings: {
                            [e.target.name]: parseInt(e.target.value),
                            headingContent: page.headingSettings.headingContent
                        }
                    }
                ))
            } else if (e.target.type === 'text') {
                dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                    {headingSettings: {[e.target.name]: e.target.value}}))
            } else {
                dispatch(updatePageWithNavLink(decodeToken(localStorage.access), slug,
                    {
                        headingSettings: {
                            [e.target.name]: e.target.value,
                            headingContent: page.headingSettings.headingContent
                        }
                    }))
            }
        }
        if (e.target.name === 'blockHeadingType') setHeadingTypeOptionsVisibility({
            ...headingTypeOptionsVisibility,
            open: false,
            display: 'none',
            bottom: '-25.2rem'
        })
    }

    return (
        <main className={styles.AdminMain}>
            <section className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
                <h2 className={styles.AdminMain__heading}>Настройка и контент страницы "{page?.link?.navLink}"</h2>
                {page && (<div className={styles.AdminMain__formContainer}>
                    <div className={styles.form__items}>
                        <PageBackground pageName={page.link?.navLink} background={page?.background}
                                        isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                        <PageIsBlockWithProds isBlockWithProds={page.isBlockWithProds}
                                              isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                        <PageProdBackground prodBackground={page.prodBackground}
                                            isBlockWithProds={page.isBlockWithProds}
                                            isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                        <PageCardQuantityInRow isBlockWithProds={page.isBlockWithProds}
                                               cardQuantityInRow={page.cardQuantityInRow}
                                               isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                    </div>
                    <div className={styles.form__items}>
                        <PageHeadingContent headingContent={page.headingSettings.headingContent}
                                            pageName={page.link.navLink}
                                            isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                        <PageHeadingType
                            blockHeadingType={page.headingSettings.blockHeadingType}
                            headingTypeOptionsVisibility={headingTypeOptionsVisibility}
                            setHeadingTypeOptionsVisibility={setHeadingTypeOptionsVisibility}
                            isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                    </div>
                    <div className={styles.form__items}>
                        <PageHeadingFontColor headingFontColor={page.headingSettings.headingFontColor}
                                              isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                        <PageHeadingFontSize headingFontSize={page.headingSettings.headingFontSize}
                                             isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                        <PageHeadingFontWeight headingFontWeight={page.headingSettings.headingFontWeight}
                                               isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                    </div>
                </div>)}
            </section>
        </main>
    );
}

export default PagesSettings;
// {/*<MarkdownEditor*/}
//             {/*    value={value}*/}
//             {/*    height="200px"*/}
//             {/*    onChange={(value, viewUpdate) => setValue(value)}*/}
//             {/*/>*/}