import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Observable, of } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { IfStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = { items: [] };

  constructor() { }

  addItem(item: CartItem) {

    if (this.cart.items.length > 0) {

      let alreadyContainsItem: boolean = false;

      
      this.cart.items.forEach(element => {
        if (element.product.id == item.product.id)
          alreadyContainsItem = true;
          
      });

      if (!alreadyContainsItem)
        this.cart.items.push(item)
      
    }

    else {
      this.cart.items.push(item)
    }

  }

  removeItem(item: CartItem) {

    let index = this.cart.items.indexOf(item)

    this.cart.items.splice(index, 1)

  }



  getCart(): Observable<Cart> {
    return of(this.cart);
  }

  getCartTotalPrice() {

    let totalPrice: number = 0;

    this.cart.items.forEach(element => {

      totalPrice += (element.product.unitPrice * element.quantity);

      
    });


    return totalPrice;
  }

  getCartLength() {
    return this.cart.items.length;
  }

  getCartItemsQuantity(){

    let itemsQuantity: number = 0;

    this.cart.items.forEach(element => {
      itemsQuantity += element.quantity
    });

    return itemsQuantity;

  }

  clearCart() {
    this.cart.items = []
  }



}
