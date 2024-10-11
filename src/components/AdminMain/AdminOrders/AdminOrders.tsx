import React from 'react';
import styles from '../AdminMain.module.sass'
import Orders from "./Orders";
//'ordersStatistics' Статистика по заказам
const AdminOrders = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} className={styles.AdminMain}>
            <h2 className={styles.AdminMain__heading}>Заказы товаров/услуг</h2>
            <Orders/>
        </div>
    );
});

export default AdminOrders;
