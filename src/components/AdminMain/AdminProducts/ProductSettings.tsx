import React from 'react';
import styles from "../AdminMain.module.sass";
import DetailPageSettings from "./DetailPageSettings/DetailPageSettings";
import ProductsAttributes from "./ProductAttributes/ProductsAttributes";
import AddProducts from "./Products/AddProducts";

const ProductSettings = React.forwardRef<HTMLElement, {}>(({}, ref) => {

    return (
        <main ref={ref} className={styles.AdminMain}>
            <DetailPageSettings/>
            <ProductsAttributes/>
            <AddProducts/>
        </main>
    );
});

export default ProductSettings;
