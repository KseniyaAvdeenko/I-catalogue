import React, {useEffect} from 'react';
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
import {loadProducts, loadProductsRead} from "./store/actions/productAction";
import {loadImages} from "./store/actions/prodImagesAction";
import {loadModalFormSettings} from "./store/actions/modalFormAction";
import Page from "./pages/Site/Page";
import Product from "./pages/Site/Product";
import Layout from "./components/SiteComponents/Layout";

function App() {
    const {pages} = useAppSelector(state => state.pageSettingsReducer);
    const {productsReadOnly} = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch()

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
        dispatch(loadProducts());
        dispatch(loadProductsRead())
        dispatch(loadImages())
        dispatch(loadModalFormSettings())
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                {pages && pages.map(elem => (
                    <Route key={elem.id} path={`page/:${elem.slug}`} element={<Layout><Page/></Layout>}/>
                ))}
                {productsReadOnly && productsReadOnly.map(elem => (
                    <Route key={elem.id} path={`product/:${elem.id}`} element={<Layout><Product/></Layout>}/>
                ))}
                <Route path={'/'} element={<Layout><Main/></Layout>}/>
                <Route path={'sign_in/'} element={<SingIn/>}/>
                <Route path={'sign_up/'} element={<SignUp/>}/>
                <Route path={'admin_page/*'} element={<AdminPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
