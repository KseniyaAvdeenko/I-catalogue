import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loadProductRead} from "../../store/actions/productAction";
import styles from './Site.module.sass'
import DetailedProdHeading from "../../components/UI/Heading/DetailedProdHeading";
import {IProdReadOnly} from "../../interface/IProduct";
import DetailProdLayout1 from "../../components/SiteComponents/DetaiProductPage/DetailProdLayout1";
import DetailProdLayout2 from "../../components/SiteComponents/DetaiProductPage/DetailProdLayout2";
import ModalPopUp from "../../components/SiteComponents/ModalPopup/ModalPopUp";
import Loader from "../../components/UI/Loader/Loader";

interface IProdPageProps {
    formData: { [key: string]: string | number; };
    getFormInputs: Function;
    setFormData: Function
}

const ProductPage: React.FC<IProdPageProps> = ({formData, setFormData, getFormInputs}) => {
    const {prodId} = useParams();
    const dispatch = useAppDispatch();
    const {prodPageSettings} = useAppSelector(state => state.prodPageSettingsReducer)
    const {productReadOnly, isLoading} = useAppSelector(state => state.productReducer)
    const [modalVisibility, setModalVisibility] = useState<boolean>(false)
    const [modalData, setModalData] = useState<IProdReadOnly | null>(null)

    useEffect(() => {
        if (prodId) dispatch(loadProductRead(parseInt(prodId)))
        if (productReadOnly) document.title = productReadOnly.name
    }, [prodId])


    function payClickHandle(prod: IProdReadOnly) {
        setModalVisibility(true);
        setModalData(prod)
    }

    function getDetailProductByLayout(contentLayout: string, productReadOnly: IProdReadOnly) {
        if (contentLayout === '1') {
            return (<DetailProdLayout1
                productReadOnly={productReadOnly}
                payClickHandle={payClickHandle}
            />)
        } else if (contentLayout === '2') {
            return (<DetailProdLayout2
                productReadOnly={productReadOnly}
                payClickHandle={payClickHandle}
            />)
        }
    }

    return prodPageSettings && productReadOnly
        ? (<main className={styles.page__container}
                 style={{background: prodPageSettings.background, alignItems: 'center'}}>
            <DetailedProdHeading pageHeading={prodPageSettings.headingSettings} prodName={productReadOnly.name}/>
            {getDetailProductByLayout(prodPageSettings.contentLayout, productReadOnly)}
            <ModalPopUp
                isModalOpen={modalVisibility}
                onClose={() => setModalVisibility(false)}
                data={modalData}
                formData={formData}
                setFormData={setFormData}
                getFormInputs={getFormInputs}
            />
        </main>)
        : (<main className={styles.page__container}
                 style={{alignItems: 'center', justifyContent: 'center'}}>{isLoading && (<Loader/>)}</main>)
};

export default ProductPage;
