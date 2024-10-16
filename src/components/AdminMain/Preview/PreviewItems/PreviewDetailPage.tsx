import React from 'react';
import styles from "../Preview.module.sass";
import {IProdReadOnly} from "../../../../interface/IProduct";
import {useAppSelector} from "../../../../hooks/redux";
import Loader from "../../../UI/Loader/Loader";
import DetailedProdHeading from "../../../UI/Heading/DetailedProdHeading";
import DetailProdLayout1 from "../../../SiteComponents/DetaiProductPage/DetailProdLayout1";
import DetailProdLayout2 from "../../../SiteComponents/DetaiProductPage/DetailProdLayout2";

const PreviewDetailPage: React.FC<{ prod: IProdReadOnly }> = ({prod}) => {

    const {prodPageSettings, isLoading} = useAppSelector(state => state.prodPageSettingsReducer)
    function getDetailProductByLayout(contentLayout: string, productReadOnly: IProdReadOnly) {
        if (contentLayout === '1') {
            return (<DetailProdLayout1
                productReadOnly={productReadOnly}
                payClickHandle={()=>{}}
            />)
        } else if (contentLayout === '2') {
            return (<DetailProdLayout2
                productReadOnly={productReadOnly}
                payClickHandle={()=>{}}
            />)
        }
    }

    return prodPageSettings ? (
        <div className={styles.layout__mainPage}
             style={{background: prodPageSettings.background, alignItems: 'center'}}>
            <DetailedProdHeading pageHeading={prodPageSettings.headingSettings} prodName={prod.name}/>
            {getDetailProductByLayout(prodPageSettings.contentLayout, prod)}
        </div>
    ) : (<div className={styles.layout__mainPage}>{isLoading && (<Loader/>)}</div>)
};

export default PreviewDetailPage;
