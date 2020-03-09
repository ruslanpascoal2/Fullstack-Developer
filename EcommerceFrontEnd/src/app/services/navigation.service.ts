import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  checkoutConcluded: boolean = false;
  constructor() { }
}
