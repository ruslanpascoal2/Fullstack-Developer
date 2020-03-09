import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.scss']
})
export class ConsultaPedidoComponent implements OnInit {


  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {

    this.orderService.getOrders().subscribe(data => {this.orders = data; console.log(data);
    })

  }

}
