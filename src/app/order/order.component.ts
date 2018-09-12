import { Component, OnInit } from '@angular/core';
import { OrderService} from '../services/order.service';
import { Subscription } from 'rxjs';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: Order[];
  sub: Subscription;

  constructor(
    readonly service: OrderService
  ) { }

  ngOnInit() {
  }

  sendOrder(){
    this.service.sendOrder();
  }


}

