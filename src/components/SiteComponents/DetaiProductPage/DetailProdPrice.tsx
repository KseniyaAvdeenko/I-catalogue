import React, {FC} from 'react';
import {getCurrency} from "../../../hooks/getCurrency";

interface IDetailProdPriceProps {
    price: number;
    currency: string,
    priceAttrs: string
}

const DetailProdPrice: FC<IDetailProdPriceProps> = ({price, priceAttrs, currency}) => {

    return (<p><b>Цена: </b>{price} {getCurrency(currency)} {priceAttrs && `/ ${priceAttrs}`}</p>);
};

export default DetailProdPrice;
