import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loadPageWithNavLink} from "../../store/actions/pageSettingsAction";
import styles from './Site.module.sass'
import Heading from "../../components/UI/Heading/Heading";
import ProductList from "../../components/SiteComponents/ProductList/ProductList";
import {IProdReadOnly} from "../../interface/IProduct";
import PageContent from "../../components/SiteComponents/PageContent/PageContent";

const Page = () => {
    const {pageSlug} = useParams();
    const dispatch = useAppDispatch();
    const {page, isLoading} = useAppSelector(state => state.pageSettingsReducer)

    useEffect(() => {
        if (pageSlug) dispatch(loadPageWithNavLink(pageSlug))
        if (page) document.title = page.navLink
    }, [])

    function payClickHandle(prod: IProdReadOnly) {
        console.log(prod)
    }

    return page ? (
            <div className={styles.page__container} style={{background: page.background}}>
                {isLoading && 'Loading ...'}
                <Heading pageHeading={page.headingSettings} headingContent={page.headingSettings.headingContent}/>
                {page.isBlockWithProds
                    ? <ProductList
                        prodCardBg={page.prodBackground}
                        cardQuantityInRow={page.cardQuantityInRow}
                        payClickHandle={payClickHandle}/>
                    : <PageContent pageContent={page.content} containerClassName={styles.page__content}/>
                }
            </div>)
        : (<div className={styles.page__container}></div>);
};

export default Page;
