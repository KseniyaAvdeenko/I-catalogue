import React, {useEffect, useState} from 'react';
import {IProdReadOnly} from "../../../interface/IProduct";
import styles from '../../../pages/Site/Site.module.sass';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import {IButtonSettings} from "../../../interface/ICommonSettings";
import ProdImage from "../../UI/ProdImage/ProdImage";

interface IProductListProps {
    cardQuantityInRow: number;
    prodCardBg: string;
    payClickHandle: Function
}

const ProductList: React.FC<IProductListProps> = ({payClickHandle, prodCardBg, cardQuantityInRow}) => {
    const {buttonSettings} = useAppSelector(state => state.buttonSettingsReducer)
    const {productsReadOnly} = useAppSelector(state => state.productReducer)
    const [btnStyles, setBtnStyles] = useState<IButtonSettings>({
        id: 0,
        buttonBorderRadius: 0,
        buttonBackground: '#bbb',
        buttonBorders: false,
        buttonBorderColor: '',
        buttonBorderWidth: 0,
        buttonTextColor: '#000',
        buttonTextFontSize: 20,
    })

    useEffect(() => {
        if (buttonSettings) setBtnStyles(buttonSettings)
    }, [buttonSettings]);


    const prodListContainer = {
        gridTemplateColumns: `repeat(3, 1fr)`,
        gridTemplateRows: `repeat(${productsReadOnly && (productsReadOnly.length / cardQuantityInRow) > 1
            ? Math.ceil(productsReadOnly.length / cardQuantityInRow) : 1}, 53rem)`,
    }

    const buttonStyle = {
        borderRadius: btnStyles.buttonBorderRadius,
        background: btnStyles.buttonBackground,
        border: btnStyles.buttonBorders
            ? btnStyles.buttonBorderWidth + 'px solid ' + btnStyles.buttonBorderColor : 'none',
        fontSize: btnStyles.buttonTextFontSize,
        color: btnStyles.buttonTextColor
    }


    return (
        <div className={styles.prodList} style={prodListContainer}>
            {productsReadOnly && productsReadOnly.map(prod => (
                <div key={prod.id} className={styles.prodItem} style={{background: prodCardBg}}>
                    <ProdImage images={prod.images} imageWrapperClassname={styles.prodItem__imageWrapper}/>
                    <div className={styles.prodItem__items}>
                        <div className={styles.prodItem__name}>{prod.name}</div>
                        <div className={styles.prodItem__price}>
                            <b>Цена:</b>
                            {prod.price}
                            {prod.currency}
                            {prod.priceAttrs && `/ ${prod.priceAttrs}`}
                        </div>
                        <Link
                            style={buttonStyle}
                            className={styles.prodItem__moreBtn}
                            to={'product/' + prod.id}>
                            Подробнее
                        </Link>
                        <button
                            style={buttonStyle}
                            className={styles.prodItem__payButton}
                            onClick={() => payClickHandle(prod)}>
                            Оплатить
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
