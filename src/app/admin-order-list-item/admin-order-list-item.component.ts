
import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-admin-order-list-item',
  templateUrl: './admin-order-list-item.component.html',
  styleUrls: ['./admin-order-list-item.component.scss']
})
export class AdminOrderListItemComponent implements OnInit {
  @Input() order: Order;


  constructor() { }

  ngOnInit() {
  }

}
