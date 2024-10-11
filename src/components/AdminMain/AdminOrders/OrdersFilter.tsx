import React, {useState} from 'react';
import ordersStyles from "./AdminOrders.module.sass";
import {IFilter, IOptions} from "../../../interface/IAdminPageComponets";
import OrderQueryDate from "./OrderQueryDate";
import OrderFiltering from "./OrderFiltering";


interface IOrdersFilterProps {
    filter: IFilter
    setFilter: Function;
}

const OrdersFilter: React.FC<IOrdersFilterProps> = ({filter, setFilter}) => {

    const [filterOptionVisibility, setFilterOptionVisibility] = useState<IOptions>({display: 'none', open: false})

    console.log(filter)

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setFilter({...filter, [e.target.name]: e.target.value})
        if (e.target.name === 'filter') setFilterOptionVisibility({
            ...filterOptionVisibility,
            display: 'none',
            open: false
        })
    }

    return (
        <div className={ordersStyles.filterSort}>
            <OrderQueryDate filter={filter} onChangeHandler={onChangeHandler}/>
            <OrderFiltering
                onChangeHandler={onChangeHandler}
                filter={filter}
                filterOptionVisibility={filterOptionVisibility}
                setFilterOptionVisibility={setFilterOptionVisibility}
            />

        </div>
    );
};

export default OrdersFilter;
