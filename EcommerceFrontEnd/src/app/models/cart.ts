import { Product } from './product';
import { CartItem } from './cart-item';

export interface Cart {
    items?: Array<CartItem>
}
