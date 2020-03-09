import { Order } from './order';

export interface Customer {
    id?: number,
    name?: String,
    code?: String
    orders?: Array<Order>
}
