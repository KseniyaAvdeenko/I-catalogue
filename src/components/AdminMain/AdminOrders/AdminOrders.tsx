import React, {useEffect, useState} from 'react';
import styles from '../AdminMain.module.sass'
import Orders from "./Orders";
import OrdersStats from "./OrdersStats";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loadOrderStats} from "../../../store/actions/orderAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";

const AdminOrders = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    const {access} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch()

    const [query, setQuery] = useState<{ num: number, interval: string }>({num: 7, interval: 'days'})

    useEffect(() => {
        if (access) dispatch(
            loadOrderStats(
                decodeToken(access),
                query.num,
                query.interval
            )
        )
    }, [access, query.num, query.interval]);


    return (
        <div ref={ref} className={styles.AdminMain}>
            <h2 className={styles.AdminMain__heading}>Заказы товаров/услуг</h2>
            <Orders/>
            <OrdersStats query={query} setQuery={setQuery}/>
        </div>
    );
});

export default AdminOrders;
