import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Order } from '../models/order';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/internal/operators/take';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError, Observable } from 'rxjs';
import { stringify } from 'querystring';
import { retry } from 'rxjs/internal/operators/retry';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  saveOrder(order: Order) {
    return this.http.post('/api/order', order);
  }

  getOrders() {
    return this.http.get<Array<Order>>('/api/orders');
  }


  handleError(error: HttpErrorResponse) {


    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //error in client side
      errorMessage = error.error.message;
    } else {
      // error in server side
      errorMessage = `Error code: ${error.status}, ` + `Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}



