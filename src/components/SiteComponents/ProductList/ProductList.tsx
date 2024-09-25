import React, {useEffect, useState} from 'react';
import {IProdReadOnly} from "../../../interface/IProduct";
import styles from '../../../pages/Site/Site.module.sass';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import {IButtonSettings} from "../../../interface/ICommonSettings";
import ProdImage from "../../UI/ProdImage/ProdImage";
import {currencyTypes} from "../../AdminMain/Options";
import SiteButton from "../../UI/SiteButton/SiteButton";
import {getCurrency} from "../../../hooks/getCurrency";

interface IProductListProps {
    cardQuantityInRow: number;
    prodCardBg: string;
    payClickHandle: Function
}

const ProductList: React.FC<IProductListProps> = ({payClickHandle, prodCardBg, cardQuantityInRow}) => {
    const {productsReadOnly} = useAppSelector(state => state.productReducer)

    const prodListContainer = {
        gridTemplateColumns: `repeat(3, 1fr)`,
        gridTemplateRows: `repeat(${productsReadOnly && (productsReadOnly.length / cardQuantityInRow) > 1
            ? Math.ceil(productsReadOnly.length / cardQuantityInRow) : 1}, 53rem)`,
    }

    return (
        <div className={styles.prodList} style={prodListContainer}>
            {productsReadOnly && productsReadOnly.map(prod => (
                <div key={prod.id} className={styles.prodItem} style={{background: prodCardBg}}>
                    <ProdImage images={prod.images} imageWrapperClassname={styles.prodItem__imageWrapper}/>
                    <div className={styles.prodItem__items}>
                        <div className={styles.prodItem__name}>{prod.name}</div>
                        <div className={styles.prodItem__price}><b>Цена:</b> {prod.price} {getCurrency(prod.currency)} {prod.priceAttrs && `/ ${prod.priceAttrs}`}
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
            ))}
        </div>
    );
};

export default ProductList;
