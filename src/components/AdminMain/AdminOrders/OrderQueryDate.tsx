import React from 'react';
import ordersStyles from "./AdminOrders.module.sass";
import {IFilter} from "../../../interface/IAdminPageComponets";

interface IOrderQueryDateProps {
    filter: IFilter
    onChangeHandler: Function
}

const OrderQueryDate: React.FC<IOrderQueryDateProps> = ({filter, onChangeHandler}) => {
    return (
        <div className={ordersStyles.filterSort__container}>
            <p>Поиск по дате заказа</p>
            <div className={ordersStyles.filterSort__inputContainer}>
                <div className={ordersStyles.filterSort__inputContainer}>
                    <label htmlFor="queryDateStart">С:</label>
                    <input
                        type="date"
                        value={filter.queryDateStart}
                        name="queryDateStart"
                        id="queryDateStart"
                        onChange={e => onChangeHandler(e)}
                    />
                </div>
                <div className={ordersStyles.filterSort__inputContainer}>
                    <label htmlFor="queryDateEnd">По:</label>
                    <input
                        type="date"
                        value={filter.queryDateEnd}
                        name="queryDateEnd"
                        id="queryDateEnd"
                        onChange={e => onChangeHandler(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderQueryDate;
