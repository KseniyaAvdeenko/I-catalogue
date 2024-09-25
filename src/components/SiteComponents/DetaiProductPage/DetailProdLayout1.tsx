import React from 'react';
import styles from './DetailProd.module.sass';
import DetailProdPrice from "./DetailProdPrice";
import {IDetailProdLayoutProps} from "./IDetailProdLayoutProps";
import SiteButton from "../../UI/SiteButton/SiteButton";
import DetailProdImages from "./DetailProdImages";


const DetailProdLayout1: React.FC<IDetailProdLayoutProps> = ({productReadOnly, payClickHandle}) => {

    return (
        <div className={styles.Layout1}>
            <DetailProdImages images={productReadOnly.images}/>
            <div className={styles.Layout1__prodItems}>
                <h3 className={styles.Layout1__prodItems__prodName}>{productReadOnly.name}</h3>
                <div className={styles.Layout1__prodItems}>
                    <DetailProdPrice
                        price={productReadOnly.price}
                        priceAttrs={productReadOnly.priceAttrs}
                        currency={productReadOnly.currency}
                    />
                    {productReadOnly.otherValues && Object.entries(productReadOnly.otherValues).map(([key, value]) => (
                        <p key={key}><b>{key}:</b> {value}</p>
                    ))}
                    <SiteButton product={productReadOnly}
                                type={'button'}
                                btnText={'Оплатить'}
                                clickHandler={payClickHandle}
                                btnClassName={styles.Layout1__prodItems__button}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailProdLayout1;
