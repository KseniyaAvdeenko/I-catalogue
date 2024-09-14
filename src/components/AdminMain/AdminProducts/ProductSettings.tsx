import React from 'react';
import styles from "../AdminMain.module.sass";
import DetailPageSettings from "./DetailPageSettings/DetailPageSettings";
import ProductsAttributes from "./ProductAttributes/ProductsAttributes";
import AddProducts from "./Products/AddProducts";
import Product from "./Product/Product";
import {useAppSelector} from "../../../hooks/redux";

const ProductSettings = React.forwardRef<HTMLElement, {}>(({}, ref) => {
    const {products} = useAppSelector(state => state.productReducer)
    return (
        <main ref={ref} className={styles.AdminMain}>
            <DetailPageSettings/>
            <ProductsAttributes/>
            <AddProducts/>
            <Product/>
        </main>
    );
});

export default ProductSettings;
