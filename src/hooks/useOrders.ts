import {IOrder} from "../interface/IOrder";
import {useMemo} from "react";

export const useFilteredOrders = (orders: IOrder[], filter: string) => {
    return useMemo(() => {
        if (filter) {
            if (filter === 'paid') return orders.filter(el => el.paid)
            if (filter === 'unpaid') return orders.filter(el => !el.paid)
            if (filter === 'all') return orders
        }
        return orders
    }, [filter, orders]);
}


export const useOrders = (orders: IOrder[], filter: string, queryDateStart: string, queryDateEnd: string) => {
    const filteredOrders = useFilteredOrders(orders, filter)
    return useMemo(() => {
        if (queryDateEnd)return filteredOrders.filter(order => Date.parse(order.order_date) <= Date.parse(queryDateEnd))
        if (queryDateStart && queryDateEnd) return filteredOrders.filter(order => Date.parse(order.order_date) >= Date.parse(queryDateStart) && Date.parse(order.order_date) <= Date.parse(queryDateEnd))
    }, [queryDateEnd, queryDateStart, filteredOrders]);
}