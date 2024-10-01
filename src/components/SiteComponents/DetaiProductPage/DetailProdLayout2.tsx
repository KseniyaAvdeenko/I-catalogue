import React from 'react';
import {IDetailProdLayoutProps} from "./IDetailProdLayoutProps";
import styles from "./DetailProd.module.sass";
import DetailProdImages from "./DetailProdImages";
import DetailProdPrice from "./DetailProdPrice";
import SiteButton from "../../UI/SiteButton/SiteButton";


const DetailProdLayout2: React.FC<IDetailProdLayoutProps> = ({productReadOnly, payClickHandle}) => {
    return (
        <div className={styles.Layout2}>
            <DetailProdImages images={productReadOnly.images}/>
            <div className={styles.Layout1__prodItems}>
                <h3 className={styles.Layout1__prodItems__prodName}>{productReadOnly.name}</h3>
                <div className={styles.Layout2__prodItems}>
                    <DetailProdPrice
                        price={productReadOnly.price}
                        priceAttrs={productReadOnly.priceAttrs}
                        currency={productReadOnly.currency}
                    />
                    {productReadOnly.otherValues && Object.entries(productReadOnly.otherValues).map(([key, value]) => (
                        <p key={key}><b>{key}:</b> {value}</p>
                    ))}

                </div>
                <SiteButton product={productReadOnly}
                            type={'button'}
                            btnText={'Оплатить'}
                            clickHandler={payClickHandle}
                            btnClassName={styles.Layout1__prodItems__button}
                />
            </div>
        </div>
    );
};

export default DetailProdLayout2;
