import React, {useState} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import styles from "../AdminMain.module.sass";
import ordersStyle from './AdminOrders.module.sass';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const OrdersStats: React.FC<{ query: { num: number, interval: string }, setQuery: Function }> = ({
                                                                                                           query,
                                                                                                           setQuery
                                                                                                       }) => {
    const {ordersStats} = useAppSelector(state => state.orderReducer)

    console.log(query, ordersStats)
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
            <div>
                <input type="number" name="num" id="num" min={1} value={query.num}
                       onChange={e => setQuery({...query, [e.target.name]: parseInt(e.target.value)})}/>
                <input type="radio" name="interval" id="days" value={'days'}
                       onChange={e => setQuery({...query, [e.target.name]: e.target.value})}/>
                <input type="radio" name="interval" id="months" value={'months'}
                       onChange={e => setQuery({...query, [e.target.name]: e.target.value})}/>
                <input type="radio" name="interval" id="years" value={'years'}
                       onChange={e => setQuery({...query, [e.target.name]: e.target.value})}/>

            </div>
        </section>
    );
};

export default OrdersStats;
