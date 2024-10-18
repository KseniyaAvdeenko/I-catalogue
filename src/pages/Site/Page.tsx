import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loadPageWithNavLink} from "../../store/actions/pageSettingsAction";
import styles from './Site.module.sass'
import Heading from "../../components/UI/Heading/Heading";
import ProductList from "../../components/SiteComponents/ProductList/ProductList";
import PageContent from "../../components/SiteComponents/PageContent/PageContent";
import Loader from "../../components/UI/Loader/Loader";
import {setPageTitle} from "../../hooks/getTitle";

interface IPageProps {
    payClickHandle: Function
}

const Page: React.FC<IPageProps> = ({payClickHandle}) => {
    const {pageSlug} = useParams();
    const dispatch = useAppDispatch();
    const {page, isLoading} = useAppSelector(state => state.pageSettingsReducer)


    useEffect(() => {
        if (pageSlug) dispatch(loadPageWithNavLink(pageSlug))
    }, [pageSlug])

    useEffect(() => {
        if (page) setPageTitle(page.navLink)
    }, [page])

    return page ? (
            <main className={styles.page__container} style={{background: page.background}}>
                <Heading pageHeading={page.headingSettings} headingContent={page.headingSettings.headingContent}/>
                {page.isBlockWithProds
                    ? <>
                        <ProductList
                            prodCardBg={page.prodBackground}
                            payClickHandle={payClickHandle}
                            cardBorder={page.cardBorder}
                            cardBorderColor={page.cardBorderColor}
                            cardBorderWidth={page.cardBorderWidth}
                        />
                    </>
                    : <PageContent pageContent={page.content} containerClassName={styles.page__content}/>
                }
            </main>)
        : (<main className={styles.page__container}
                 style={{alignItems: 'center', justifyContent: 'center'}}>{isLoading && (<Loader/>)}</main>);
};

export default Page;
