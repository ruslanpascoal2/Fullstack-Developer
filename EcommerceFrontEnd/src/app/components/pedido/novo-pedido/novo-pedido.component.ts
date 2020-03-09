import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cart-item';
import { ShippingService } from 'src/app/services/shipping.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.scss']
})
export class NovoPedidoComponent implements OnInit {

  customers: Array<Customer> = []
  products: Array<Product> = []
  cart: Cart
  cartLength: number = 0;
  customerSearchForm: FormGroup;
  productSearchForm: FormGroup;
  quantityField: number = 1;
  totalItemsPrice: number = 0;
  totalShipping: number = 0;
  totalCartPrice: number = 0;
  selectedCustomer: Customer;
  newOrderNumber: any;
  showProductSearchHint: boolean = false;
  showCustomerSearchHint: boolean = false;
  formSearchCustomerValid: boolean = false;
  isproductSearchFormValid: boolean = false;
  isCartEmpty: boolean = true;
  checkoutConcludedboolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private productService: ProductService,
    private cartService: CartService,
    private shippingService: ShippingService,
    private orderService: OrderService,
    private navService: NavigationService,
    private router: Router) { }

  ngOnInit() {

    this.customerService.getCustomers().subscribe(data => this.customers = data);

    this.productService.getProducts().subscribe(data => this.products = data);

    this.customerSearchForm = this.formBuilder.group({
      customerSearchInput: ['', Validators.required]
    })

    this.productSearchForm = this.formBuilder.group({
      productSearchInput: ['', Validators.minLength(0)]
    })

    this.cartService.getCart().subscribe(data => this.cart = data)

    this.orderService.getOrders().subscribe((orders: Array<Order>) => {
      this.newOrderNumber = 1 + (orders[orders.length - 1].id);
    })


  }

  addItemToCart() {

    if (!this.productSearchForm.value.productSearchInput) {
      this.showProductSearchHint = true;
    }

    else {

      let selectedProduct;

      this.products.forEach(item => {
        if (this.productSearchForm.value.productSearchInput == item.name) {
          selectedProduct = item;
          this.isproductSearchFormValid = true;
          this.showProductSearchHint = false;
        }
      });


      if (!this.isproductSearchFormValid) {
        this.showProductSearchHint = true;
      }

      else {
        this.cartService.addItem({ product: selectedProduct, quantity: this.quantityField });
        this.cartLength = this.cartService.getCartLength()
        this.totalItemsPrice = this.cartService.getCartTotalPrice()
        this.getShippingPrice();
        this.isCartEmpty = false;
      }

    }



  }

  refreshQty(item, itemQty) {
    this.totalItemsPrice = this.cartService.getCartTotalPrice()
    this.getShippingPrice();
  }

  removeItemFromCart(item: CartItem) {
    this.cartService.removeItem(item)
    this.totalItemsPrice = this.cartService.getCartTotalPrice()
    this.getShippingPrice();

    if (this.cartService.getCartLength() == 0) {
      this.isCartEmpty = true;
    }

  }

  getShippingPrice() {

    let itemsQuantity: number = this.cartService.getCartItemsQuantity();


    this.shippingService.getShippingPrice(itemsQuantity).subscribe(price => {
      this.totalShipping = price;
      this.totalCartPrice = this.totalShipping + this.totalItemsPrice;
    })
  }

  onCustomerSelect() {
    this.showCustomerSearchHint = false;
  }

  onProductSelect() {
    this.showProductSearchHint = false;
  }

  checkout() {


    let selectedCustomer;

    this.customers.forEach(customer => {
      if (customer.name == this.customerSearchForm.value.customerSearchInput) {
        this.formSearchCustomerValid = true;
        selectedCustomer = customer;
      }
    });

    if (this.formSearchCustomerValid && this.cartService.getCartLength() > 0) {

      let order: Order = {
        qtyItems: this.cartService.getCartItemsQuantity(),
        shippingPrice: this.totalShipping,
        totalPrice: this.totalCartPrice,
        customer: {
          id: selectedCustomer.id
        }
      };

      this.orderService.saveOrder(order).subscribe( );
      this.navService.checkoutConcluded = true
      this.router.navigate(['pedido/pedidoConcluido']);

    }

    else {


      if (!(this.cartService.getCartLength() > 0)) this.showProductSearchHint = true;


    }




  }

}
