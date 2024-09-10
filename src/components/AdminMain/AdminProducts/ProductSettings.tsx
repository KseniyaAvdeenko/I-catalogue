import React from 'react';
import styles from "../AdminMain.module.sass";
import DetailPageSettings from "./DetailPageSettings/DetailPageSettings";

const ProductSettings = React.forwardRef<HTMLElement, {}>(({}, ref) => {
    return (
        <main ref={ref} className={styles.AdminMain}>
            <DetailPageSettings/>
        </main>
    );
});

export default ProductSettings;
