import React from 'react';
import styles from "../../../pages/Site/Site.module.sass";
import ProdImage from "../../UI/ProdImage/ProdImage";
import {getCurrency} from "../../../hooks/getCurrency";
import SiteButton from "../../UI/SiteButton/SiteButton";
import {IProdReadOnly} from "../../../interface/IProduct";

interface IProductItemProps {
    prod: IProdReadOnly;
    prodCardBg: string;
    payClickHandle: Function
    cardBorder: boolean;
    cardBorderColor: string;
    cardBorderWidth: number;
}

const ProductItem: React.FC<IProductItemProps> = ({
                                                      cardBorderWidth,
                                                      cardBorderColor,
                                                      cardBorder,
                                                      payClickHandle,
                                                      prod,
                                                      prodCardBg
                                                  }) => {
    return (
        <div key={prod.id} className={styles.prodItem}
             style={{
                 background: prodCardBg,
                 border: cardBorder ? cardBorderWidth + 'px solid ' + cardBorderColor : 'none'
             }}>
            <ProdImage images={prod.images} imageWrapperClassname={styles.prodItem__imageWrapper}/>
            <div className={styles.prodItem__items}>
                <div className={styles.prodItem__name}>{prod.name}</div>
                <div className={styles.prodItem__price}>
                    <b>Цена:</b> {prod.price} {getCurrency(prod.currency)} {prod.priceAttrs && `/ ${prod.priceAttrs}`}
                </div>
                <SiteButton product={prod}
                            type={'link'}
                            btnText={'Подробнее'}
                            btnClassName={styles.prodItem__moreBtn}
                />
                <SiteButton product={prod}
                            type={'button'}
                            btnText={'Оплатить'}
                            clickHandler={payClickHandle}
                            btnClassName={styles.prodItem__payButton}
                />
            </div>
        </div>
    );
};

export default ProductItem;
