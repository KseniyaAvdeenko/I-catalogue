import React from 'react';
import styles from "../AdminMain.module.sass";
import ProductsAttributes from "./ProductAttributes/ProductsAttributes";
import AddProducts from "./Products/AddProducts";
import DetailPageSettings from "./DetailPageSettings/DetailPageSettings";

const ProductSettings = React.forwardRef<HTMLDivElement, {}>(({}, ref) => {

    return (
        <div ref={ref} className={styles.AdminMain}>
            <DetailPageSettings/>
            <ProductsAttributes/>
            <AddProducts/>
        </div>
    );
});

export default ProductSettings;
