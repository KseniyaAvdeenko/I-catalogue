import React from 'react';
import styles from "../AdminMain.module.sass";
import DetailPageSettings from "./DetailPageSettings/DetailPageSettings";
import ProductsAttributes from "./ProductAttributes/ProductsAttributes";
import Products from "./Products/Products";

const ProductSettings = React.forwardRef<HTMLElement, {}>(({}, ref) => {
    return (
        <main ref={ref} className={styles.AdminMain}>
            <DetailPageSettings/>
            <ProductsAttributes/>
            <Products/>
        </main>
    );
});

export default ProductSettings;
