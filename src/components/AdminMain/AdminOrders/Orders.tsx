import React, {useState} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import styles from '../AdminMain.module.sass';
import ordersStyles from './AdminOrders.module.sass'
import {tableHead} from "../Options";
import {getCurrency} from "../../../hooks/getCurrency";
import {getDate} from "../../../utils/getDate";
import Tick from '../../../assets/img/tick.svg';
import Cross from '../../../assets/img/cross.svg';
import OrdersFilter from "./OrdersFilter";
import {IFilter} from "../../../interface/IAdminPageComponets";
import {useOrders} from "../../../hooks/useOrders";


const Orders = () => {
    const {orders} = useAppSelector(state => state.orderReducer);
    const {modalForm} = useAppSelector(state => state.modalFormReducer);

    const [filter, setFilter] = useState<IFilter>({
        queryDateStart: '',
        queryDateEnd: new Date().toISOString().split('T')[0],
        filter: 'all'
    })
    const filteredOrders = useOrders(orders ? orders : [], filter.filter, filter.queryDateStart, filter.queryDateEnd)

    const getPaymentData = (data: any): string => {
        let [paymentData] = data
        return paymentData.paymentId
    }

    return (
        <section id={'ordersTable'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Сводная таблица заказов</h3>

            <OrdersFilter filter={filter} setFilter={setFilter}/>

            <div className={ordersStyles.table}>
                <div className={ordersStyles.table__thead}>
                    <div className={ordersStyles.table__tableTr}>
                        {tableHead.map(th => (
                            <div key={th.id} style={{width: th.width}}
                                 className={ordersStyles.table__tableTh}>{th.name}</div>
                        ))}
                    </div>
                </div>
                <div className={ordersStyles.table__tableTbody}>
                    {filteredOrders && filteredOrders.map(order => (
                        <div key={order.id} className={ordersStyles.table__tableTr}>
                            <div className={ordersStyles.table__tableTh}>{order.id}</div>
                            <div className={ordersStyles.table__tableTh}>{getDate(order.order_date)}</div>
                            <div className={ordersStyles.table__tableTh}>{order.prod.name}</div>
                            <div
                                className={ordersStyles.table__tableTh}>{order.total_price} {getCurrency(order.currency)}</div>
                            <div className={ordersStyles.table__tableData}>
                                {modalForm && modalForm.labels.map(label => (
                                    <div
                                        key={label.inputIdName}>{label.inputLabel}: {order.form_input_values[label.inputIdName]}</div>
                                ))}
                            </div>
                            <div className={ordersStyles.table__tableTh} style={{textAlign: "center"}}>
                                {order.paid ? <img src={Tick} alt="tick"/> : <img src={Cross} alt='cross'/>}
                            </div>
                            <div className={ordersStyles.table__tableTh}>{getPaymentData(order.payment)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Orders;

