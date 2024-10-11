import React from 'react';
import styles from '../AdminMain.module.sass'
import Orders from "./Orders";
import OrdersStats from "./OrdersStats";

const AdminOrders = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} className={styles.AdminMain}>
            <h2 className={styles.AdminMain__heading}>Заказы товаров/услуг</h2>
            <Orders/>
            <OrdersStats/>
        </div>
    );
});

export default AdminOrders;
