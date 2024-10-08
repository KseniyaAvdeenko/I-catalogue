import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Site/Main";
import SingIn from "./pages/Authentication/SingIn";
import SignUp from "./pages/Authentication/SingUp";
import AdminPage from "./pages/AdminPage/AdminPage";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {loadButtonSettings} from "./store/actions/buttonSettingsAction";
import {loadCommonSettings} from "./store/actions/commonSettingsAction";
import {loadContacts} from "./store/actions/contactsAction";
import {loadPagesWithNavLinks} from "./store/actions/pageSettingsAction";
import {loadMainPageSettings} from "./store/actions/mainPageSettingsAction";
import {loadFooterSettings} from "./store/actions/footerSettingsAction";
import {loadHeaderSettings} from "./store/actions/headerSettingsAction";
import {loadProdPage} from "./store/actions/prodPageSettingsAction";
import {loadProdAttributes} from "./store/actions/prodAttrsAction";
import {loadImages} from "./store/actions/prodImagesAction";
import {loadModalFormSettings} from "./store/actions/modalFormAction";
import Page from "./pages/Site/Page";
import ProductPage from "./pages/Site/ProductPage";
import Layout from "./components/SiteComponents/Layout";
import {loadOrders} from "./store/actions/orderAction";
import {loadProductsRead} from "./store/actions/productAction";
import {loadProductsByPage} from "./store/actions/paginatedProductsAction";
import {loadSocialLinks} from "./store/actions/socialLinksAction";
import {loadSeoTags} from "./store/actions/seoSettingsAction";
import AdminLayout from "./components/AdminComponents/AdminLayout";

function App() {
    const dispatch = useAppDispatch()
    const {errorCurrentUser} = useAppSelector(state => state.userReducer)
    const auth = useAppSelector(state => state.authReducer)
    const commonSettings = useAppSelector(state => state.commonSettingsReducer)
    const headerSettings = useAppSelector(state => state.commonSettingsReducer)
    const footerSettings = useAppSelector(state => state.footerSettingsReducer)
    const buttonSettings = useAppSelector(state => state.buttonSettingsReducer)
    const mainPage = useAppSelector(state => state.mainPageSettingsReducer)
    const contacts = useAppSelector(state => state.contactsReducer)
    const seo = useAppSelector(state => state.seoSettingsReducer)
    const socialLinks = useAppSelector(state => state.socialLinkReducer)
    const prodAttrs = useAppSelector(state => state.prodAttrsReducer)
    const prodImages = useAppSelector(state => state.prodImagesReducer)
    const pages = useAppSelector(state => state.pageSettingsReducer);
    const {currentPage, pageSize, error} = useAppSelector(state => state.paginatedProductReducer);
    const products = useAppSelector(state => state.productReducer);
    const detailProdPage = useAppSelector(state => state.prodPageSettingsReducer)
    const modalForm = useAppSelector(state => state.modalFormReducer)
    const orders = useAppSelector(state => state.orderReducer)


    const [errorAdminNtfs, setErrorAdminNtFs] = useState<string[]>([])
    const [successAdminNtfs, setSuccessAdminNtFs] = useState<string[]>([])
    const [errorNtfs, setErrorNtFs] = useState<string[]>([])
    const [successNtfs, setSuccessNtFs] = useState<string[]>([])

    const getErrors = (error: string, forAdmin: boolean, forSite: boolean) => {
        if (error) {
            if (forSite) setErrorNtFs([...errorNtfs, error])
            if (forAdmin) setErrorAdminNtFs([...errorAdminNtfs, error])
        }
    }

    useEffect(() => {
        getErrors(modalForm.error, true, true);
        getErrors(modalForm.updatingError, true, false);
        getErrors(modalForm.error, true, true);
        getErrors(modalForm.updatingError, true, false);
        getErrors(detailProdPage.error, true, true);
        getErrors(detailProdPage.updatingError, true, false);
        getErrors(products.error, true, true);
        getErrors(products.productError, true, false);
        getErrors(prodAttrs.error, true, false);
        getErrors(prodAttrs.prodAttrError, true, false);
        getErrors(pages.error, true, true);
        getErrors(pages.pageError, true, false);
        getErrors(socialLinks.error, true, true);
        getErrors(socialLinks.socialLinkError, true, false);
        getErrors(seo.error, true, true);
        getErrors(seo.seoTagError, true, false);
        getErrors(contacts.error, true, true);
        getErrors(contacts.contactError, true, false);
        getErrors(mainPage.error, true, true);
        getErrors(mainPage.updatingError, true, false);
        getErrors(buttonSettings.error, true, true);
        getErrors(buttonSettings.updatingError, true, false);
        getErrors(footerSettings.error, true, true);
        getErrors(footerSettings.updatingError, true, false);
        getErrors(headerSettings.error, true, true);
        getErrors(headerSettings.updatingError, true, false);
        getErrors(commonSettings.error, true, true);
        getErrors(commonSettings.updatingError, true, false);
        getErrors(errorCurrentUser, true, false);
        getErrors(error, false, true)
        getErrors(auth.error, true, false);
        getErrors(prodImages.error, true, false);
        getErrors(orders.error, true, false);
        getErrors(orders.newOrderError, false, true);
        getErrors(orders.paymentError, false, true);
        if (orders.createdOrderSuccess) setSuccessNtFs([...successNtfs, 'Заказ создан. В ближайшее время с Вами свяжется наш менеджер'])
        if (orders.paymentPaid) setSuccessNtFs([...successNtfs, 'Оплата заказа прошла успешно'])
        if (auth.isSignedUp) setSuccessAdminNtFs([...successAdminNtfs, 'Регистрация прошла успешно'])
    }, [
        auth.isSignedUp, auth.error, errorCurrentUser, commonSettings.error, commonSettings.updatingError,
        headerSettings.error, headerSettings.updatingError, footerSettings.error, footerSettings.updatingError,
        buttonSettings.error, buttonSettings.updatingError, mainPage.error, mainPage.updatingError, prodImages.error,
        contacts.error, contacts.contactError, seo.error, seo.seoTagError, socialLinks.error, socialLinks.socialLinkError,
        pages.error, pages.pageError, error, prodAttrs.error, prodAttrs.prodAttrError, detailProdPage.updatingError,
        detailProdPage.error, modalForm.error, modalForm.updatingError, orders.newOrderError, orders.error,
        orders.paymentError, orders.createdOrderSuccess, orders.paymentPaid
    ])

    useEffect(() => {
        if (errorNtfs.length) {
            setTimeout(() => {
                setErrorAdminNtFs([])
                setSuccessAdminNtFs([])
                setErrorNtFs([])
                setSuccessNtFs([])
            }, 5000)
        }
    }, [errorNtfs.length]);

    useEffect(() => {
        dispatch(loadButtonSettings());
        dispatch(loadCommonSettings());
        dispatch(loadContacts());
        dispatch(loadPagesWithNavLinks());
        dispatch(loadMainPageSettings());
        dispatch(loadFooterSettings());
        dispatch(loadHeaderSettings());
        dispatch(loadProdPage());
        dispatch(loadProdAttributes());
        dispatch(loadProductsByPage(currentPage, pageSize));
        dispatch(loadProductsRead());
        dispatch(loadImages());
        dispatch(loadModalFormSettings());
        dispatch(loadOrders());
        dispatch(loadSocialLinks());
        dispatch(loadSeoTags());
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                {pages && pages.pages && pages.pages.map(elem => (
                    <Route key={elem.id} path={`page/:pageSlug`} element={
                        <Layout
                        errorNtfs={errorNtfs}
                        successNtfs={successNtfs}
                        setErrorNtfs={setErrorNtFs}
                        setSuccessNtfs={setSuccessNtFs}><Page/></Layout>}/>))}
                {products && products.productsReadOnly && products.productsReadOnly.map(elem => (
                    <Route key={elem.id} path={`product/:prodId`} element={
                        <Layout
                        errorNtfs={errorNtfs}
                        successNtfs={successNtfs}
                        setErrorNtfs={setErrorNtFs}
                        setSuccessNtfs={setSuccessNtFs}><ProductPage/></Layout>}/>
                ))}
                <Route path={'/'} element={
                    <Layout
                    errorNtfs={errorNtfs}
                    successNtfs={successNtfs}
                    setErrorNtfs={setErrorNtFs}
                    setSuccessNtfs={setSuccessNtFs}><Main/></Layout>}/>
                <Route path={'sign_in/'} element={<AdminLayout
                    errorNtfs={errorAdminNtfs}
                    successNtfs={successAdminNtfs}
                    setErrorNtFs={setErrorAdminNtFs}
                    setSuccessNtFs={setSuccessAdminNtFs}
                ><SingIn/></AdminLayout>}/>
                <Route path={'sign_up/'} element={<AdminLayout
                    errorNtfs={errorAdminNtfs}
                    successNtfs={successAdminNtfs}
                    setErrorNtFs={setErrorAdminNtFs}
                    setSuccessNtFs={setSuccessAdminNtFs}
                ><SignUp/></AdminLayout>}/>
                <Route path={'admin_page/*'} element={<AdminLayout
                    errorNtfs={errorAdminNtfs}
                    successNtfs={successAdminNtfs}
                    setErrorNtFs={setErrorAdminNtFs}
                    setSuccessNtFs={setSuccessAdminNtFs}
                ><AdminPage/></AdminLayout>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
