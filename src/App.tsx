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
import {checkPayment, loadOrders} from "./store/actions/orderAction";
import {loadProductsRead} from "./store/actions/productAction";
import {loadProductsByPage} from "./store/actions/paginatedProductsAction";
import {loadSocialLinks} from "./store/actions/socialLinksAction";
import {loadSeoTags} from "./store/actions/seoSettingsAction";
import AdminLayout from "./components/AdminComponents/AdminLayout";
import {errorSlice} from "./store/reducers/errorSlice";
import {decodeToken} from "./hooks/encodeDecodeTokens";

function App() {
    const dispatch = useAppDispatch()

    const auth = useAppSelector(state => state.authReducer)
    const pages = useAppSelector(state => state.pageSettingsReducer);
    const {currentPage, pageSize} = useAppSelector(state => state.paginatedProductReducer);
    const products = useAppSelector(state => state.productReducer);
    const orders = useAppSelector(state => state.orderReducer)
    const {adminErrors, siteErrors} = useAppSelector(state => state.errorReducer)

    const [errorAdminNtfs, setErrorAdminNtFs] = useState<string[]>([])
    const [successAdminNtfs, setSuccessAdminNtFs] = useState<string[]>([])
    const [errorNtfs, setErrorNtFs] = useState<string[]>([])
    const [successNtfs, setSuccessNtFs] = useState<string[]>([])

    useEffect(() => {
        if (orders.createdOrderSuccess) setSuccessNtFs([...successNtfs, 'Заказ создан. В ближайшее время с Вами свяжется наш менеджер'])
        if (orders.paymentPaid) setSuccessNtFs([...successNtfs, 'Оплата заказа прошла успешно'])
        if (auth.isSignedUp) setSuccessAdminNtFs([...successAdminNtfs, 'Регистрация прошла успешно'])

        if(adminErrors.length) setErrorAdminNtFs(adminErrors)
        if(siteErrors.length) setErrorNtFs(siteErrors)

    }, [adminErrors.length, siteErrors.length, auth.isSignedUp, orders.createdOrderSuccess, orders.paymentPaid])

    useEffect(() => {
        if(errorAdminNtfs.length) setTimeout(()=>{
            setErrorAdminNtFs([]); dispatch(errorSlice.actions.clearAdminErrors())}, 7000)
        if(successAdminNtfs.length) setTimeout(()=>{setSuccessAdminNtFs([])}, 9000)
        if(successNtfs.length) setTimeout(()=>{setErrorAdminNtFs([])}, 7000)
        if (errorNtfs.length) setTimeout(() => {
            setErrorNtFs([]); dispatch(errorSlice.actions.clearSiteErrors())}, 7000)
    }, [errorNtfs.length, errorAdminNtfs.length, successNtfs.length, successAdminNtfs.length]);

    useEffect(() => {
        if (localStorage.paymentId && localStorage.orderId && localStorage.youkassaPaymentId)
            dispatch(checkPayment(decodeToken(localStorage.youkassaPaymentId), +localStorage.orderId, +localStorage.paymentId))
    }, [localStorage.paymentId, localStorage.orderId, localStorage.youkassaPaymentId])

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
