import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loadPageWithNavLink} from "../../store/actions/pageSettingsAction";
import styles from './Site.module.sass'
import Heading from "../../components/UI/Heading/Heading";
import ProductList from "../../components/SiteComponents/ProductList/ProductList";
import {IProdReadOnly} from "../../interface/IProduct";
import PageContent from "../../components/SiteComponents/PageContent/PageContent";
import ModalPopUp from "../../components/SiteComponents/ModalPopup/ModalPopUp";

const Page = () => {
    const {pageSlug} = useParams();
    const dispatch = useAppDispatch();
    const {page, isLoading} = useAppSelector(state => state.pageSettingsReducer)
    const [modalVisibility, setModalVisibility] = useState<boolean>(false)
    const [modalData, setModalData] = useState<IProdReadOnly | null>(null)


    useEffect(() => {
        if (pageSlug) dispatch(loadPageWithNavLink(pageSlug))
        if (page) document.title = page.navLink
    }, [])

    function payClickHandle(prod: IProdReadOnly) {
        setModalVisibility(true)
        setModalData(prod)
    }

    return page ? (
            <main className={styles.page__container} style={{background: page.background}}>
                {isLoading && 'Loading ...'}
                <Heading pageHeading={page.headingSettings} headingContent={page.headingSettings.headingContent}/>
                {page.isBlockWithProds
                    ? <>
                        <ProductList
                        prodCardBg={page.prodBackground}
                        payClickHandle={payClickHandle}/>
                        <ModalPopUp isModalOpen={modalVisibility} onClose={()=>setModalVisibility(false)} data={modalData}/>
                    </>
                    : <PageContent pageContent={page.content} containerClassName={styles.page__content}/>
                }
            </main>)
        : (<main className={styles.page__container}></main>);
};

export default Page;
