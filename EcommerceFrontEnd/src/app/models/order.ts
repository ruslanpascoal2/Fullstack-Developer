import { Customer } from './customer';

export interface Order {
    id?: number,
    date?: String,
    qtyItems?: number,
    shippingPrice?: number,
    totalPrice?: number,
    customer?: Customer
}
