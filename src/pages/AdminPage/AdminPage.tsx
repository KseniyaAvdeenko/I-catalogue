import React, {useEffect, useRef, useState} from 'react';
import styles from './AdminPage.module.sass'
import AdminCommonSettings from "../../components/AdminMain/AdminCommonSettings/AdminCommonSettings";
import {Route, Routes} from "react-router-dom";
import AdminNavbar from "../../components/AdminMain/AdminNavbar/AdminNavbar";
import PagesSettings from "../../components/AdminMain/AdminPagesSettings/PagesSettings";
import MainPageSettings from "../../components/AdminMain/AdminMainPageSettings/MainPageSettings";
import ProductSettings from "../../components/AdminMain/AdminProducts/ProductSettings";
import {scrollingToSection} from "../../hooks/scrollingToSection";
import Product from "../../components/AdminMain/AdminProducts/Product/Product";
import ModalFormSettings from "../../components/AdminMain/AdminModalForm/ModalFormSettings";
import Sidebar from "../../components/AdminComponents/Sidebar/Sidebar";
import {setFavicon} from "../../hooks/setFavicon";
import Favicon from '../../assets/img/I-Catalogue.svg'
import SeoSettings from "../../components/AdminMain/AdminSeoSettings/SeoSettings";
import {useAppSelector} from "../../hooks/redux";
import {IIntro} from "../../interface/IAdminPageComponets";
import AdminOrders from "../../components/AdminMain/AdminOrders/AdminOrders";
import {setPageTitle} from "../../hooks/getTitle";
import PreviewButton from "../../components/AdminMain/Preview/PreviewButton";
import Preview from "../../components/AdminMain/Preview/Preview";
import {useWindowWidth} from "../../hooks/useWindowWidth";


const AdminPage = () => {
    const auth = useAppSelector(state => state.authReducer)
    const commonSettingsRef = useRef<HTMLDivElement>(null);
    const navbarContentRef = useRef<HTMLDivElement>(null);
    const productSettingsRef = useRef<HTMLDivElement>(null)
    const modalFormSettingsRef = useRef<HTMLDivElement>(null)
    const ordersRef = useRef<HTMLDivElement>(null)
    const sidebarRef = useRef<HTMLDivElement>(null)

    const [intro, setIntro] = useState<IIntro>({display: "block", justifyContent: "center"})
    const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false)
    const windowWidth = useWindowWidth();

    const scrollToBlock = (sectionId: string) => {
        scrollingToSection(sectionId, commonSettingsRef.current);
        scrollingToSection(sectionId, navbarContentRef.current);
        scrollingToSection(sectionId, productSettingsRef.current);
        scrollingToSection(sectionId, modalFormSettingsRef.current)
    }
    useEffect(() => {
        setFavicon(Favicon)
        setPageTitle('Административная панель')
    }, [])

    const getPreviewVisibility = () => setIsPreviewOpen(isPreviewOpen => !isPreviewOpen)

    useEffect(() => {
        if(windowWidth > 1024 && sidebarRef.current) sidebarRef.current.style.display = 'flex'
        if(windowWidth <= 1024 && sidebarRef.current) sidebarRef.current.style.display = 'none'
    }, [windowWidth]);


    function openSideBar(e: React.MouseEvent<HTMLDivElement>) {
        if (sidebarRef.current) {
            sidebarRef.current.style.display === 'none'
                ? sidebarRef.current.style.display = 'flex'
                : sidebarRef.current.style.display = 'none';
        }

    }

    return auth.isAuth ? (
            <section className={styles.AdminPage}>
                <Preview isOpen={isPreviewOpen}/>
                <Sidebar ref={sidebarRef} scrollToBlock={scrollToBlock} intro={intro} setIntro={setIntro}/>
                <div className={styles.AdminPage__sidebarButton} onClick={e => openSideBar(e)}>menu</div>
                <main className={styles.AdminPage__container} style={{justifyContent: intro.justifyContent}}>
                    <div style={{display: intro.display}} className={styles.AdminPage__intro}>Здесь Вы сможете настроить
                        свой интернет-каталог
                    </div>
                    <Routes>
                        <Route path={'common_settings/'} element={<AdminCommonSettings ref={commonSettingsRef}/>}/>
                        <Route path={'navbar/'} element={<AdminNavbar ref={navbarContentRef}/>}/>
                        <Route path={'seo_settings/'} element={<SeoSettings/>}/>
                        <Route path={'main_page_settings/'} element={<MainPageSettings/>}/>
                        <Route path={'pages_settings/:slug'} element={<PagesSettings/>}/>
                        <Route path={'products_settings/'} element={<ProductSettings ref={productSettingsRef}/>}/>
                        <Route path={'editing_products/'} element={<Product/>}/>
                        <Route path={'modal_form/'} element={<ModalFormSettings ref={modalFormSettingsRef}/>}/>
                        <Route path={'orders/'} element={<AdminOrders ref={ordersRef}/>}/>
                    </Routes>
                </main>
                <PreviewButton getPreviewVisibility={getPreviewVisibility}/>
            </section>)
        : (<main className={styles.AdminPage_notAuth}>Вы не авторизованы</main>)
};

export default AdminPage;
