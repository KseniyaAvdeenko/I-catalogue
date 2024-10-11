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
    paymentId: string
    order: number
    amount: number
    status: string
}

export interface IPayment extends IPaymentBase {
    id: number
}

export interface IOrder {
    id: number
    paid: boolean;
    order_date: string;
    prod: IProdForOrder;
    payment: IPayment | {}
    total_price: number;
    form_input_values: { [key: string]: string | number }
    currency: string
}
