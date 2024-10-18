import React, {FC} from 'react';
import {getCurrency} from "../../../hooks/getCurrency";

interface IDetailProdPriceProps {
    price: number;
    currency: string,
    priceAttrs: string
}

const DetailProdPrice: FC<IDetailProdPriceProps> = ({price, priceAttrs, currency}) => {

    return (<p itemProp="price" content={String(price)}>
        <b>Цена: </b>{price}
        <span style={{marginLeft: 5}} itemProp="priceCurrency" content={currency}>{getCurrency(currency)} {priceAttrs && `/ ${priceAttrs}`}
        </span>
    </p>);
};

export default DetailProdPrice;
