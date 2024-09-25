import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loadProductRead} from "../../store/actions/productAction";
import styles from './Site.module.sass'
import DetailedProdHeading from "../../components/UI/Heading/DetailedProdHeading";
import layout from "../../components/SiteComponents/Layout";
import {IProdReadOnly} from "../../interface/IProduct";

const ProductPage = () => {
    const {prodId} = useParams();
    const dispatch = useAppDispatch();
    const {prodPageSettings} = useAppSelector(state => state.prodPageSettingsReducer)
    const {productReadOnly, isLoading} = useAppSelector(state => state.productReducer)
    useEffect(() => {
        if (prodId) dispatch(loadProductRead(parseInt(prodId)))
        if(productReadOnly) document.title = productReadOnly.name
    }, [])

    console.log(prodPageSettings, productReadOnly)

    function getDetailProductByLayout(contentLayout: string, productReadOnly: IProdReadOnly) {
        return(<div></div>)
    }

    return prodPageSettings && productReadOnly
        ? (<div className={styles.page__container}>
            <DetailedProdHeading pageHeading={prodPageSettings.headingSettings} prodName={productReadOnly.name}/>
            {getDetailProductByLayout(prodPageSettings.contentLayout, productReadOnly)}
        </div>)
        : (<div className={styles.page__container}></div>)
};

export default ProductPage;
