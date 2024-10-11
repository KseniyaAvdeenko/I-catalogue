import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import styles from "../AdminMain.module.sass";
import ordersStyle from './AdminOrders.module.sass';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const OrdersStats = () => {
    const {ordersStats} = useAppSelector(state => state.orderReducer)

    console.log(ordersStats)
    return (
        <section id={'ordersStatistics'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Статистика по заказам</h3>
            {ordersStats && (
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={ordersStats}>
                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Line name={'Количество заказов'} type="monotone" dataKey="count" stroke="#2C3E50"/>
                    </LineChart>
                </ResponsiveContainer>)}
        </section>
    );
};

export default OrdersStats;
