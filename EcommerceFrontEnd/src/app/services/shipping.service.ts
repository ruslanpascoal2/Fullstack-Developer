import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http: HttpClient) { }

  getShippingPrice(qtyItems: number) {
    return this.http.get<any>(`${environment.ShippingAPI}/${qtyItems}`).pipe(catchError(this.errorHandler));
  }

  getCartItemShippingPrice(qtyItems: number){
    return this.http.get<any>(`${environment.ShippingAPI}/${qtyItems}`);
  }


  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "")
  }

}
