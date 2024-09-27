export interface INewOrderBase {
    total_price: number;
    form_input_values: { [key: string]: string | number }
    prod: number
    currency: string
}

export interface INewOrder extends INewOrderBase {
    id: number
    paid: boolean;
}

export interface IProdForOrder {
    id: number
    name: string;
    price: number
    currency: string;
}

export interface IPaymentBase {
    id_pay: string
    order: number
    amount: number
    status: string
}

export interface IPayment extends IPaymentBase{
    id: number
}

export interface IOrder extends INewOrder {
    order_date: string;
    product: IProdForOrder;
    payment: IPayment|{}
}
