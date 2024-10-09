import React, {useRef, useState} from 'react';
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

const AdminPage = () => {
    const auth = useAppSelector(state => state.authReducer)
    const commonSettingsRef = useRef<HTMLDivElement>(null);
    const navbarContentRef = useRef<HTMLDivElement>(null);
    const productSettingsRef = useRef<HTMLDivElement>(null)
    const modalFormSettingsRef = useRef<HTMLDivElement>(null)
    const ordersRef = useRef<HTMLDivElement>(null)

    const [intro, setIntro] = useState<IIntro>({display: "block", justifyContent: "center"})

    const scrollToBlock = (sectionId: string) => {
        scrollingToSection(sectionId, commonSettingsRef.current);
        scrollingToSection(sectionId, navbarContentRef.current);
        scrollingToSection(sectionId, productSettingsRef.current);
        scrollingToSection(sectionId, modalFormSettingsRef.current)
    }
    setFavicon(Favicon)

    return auth.isAuth ? (
            <section className={styles.AdminPage}>
                <Sidebar scrollToBlock={scrollToBlock} intro={intro} setIntro={setIntro}/>
                <main className={styles.AdminPage__container} style={{justifyContent: intro.justifyContent}}>
                    <div style={{display: intro.display}} className={styles.AdminPage__intro}>Здесь Вы сможете настроить свой интернет-каталог</div>
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
                {/*<div style={{position: 'fixed', bottom: '5%', right: '2rem'}}>Preview</div>*/}
            </section>)
        : (<main className={styles.AdminPage_notAuth}>Вы не авторизованы</main>)
};

export default AdminPage;
