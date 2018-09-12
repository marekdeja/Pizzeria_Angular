import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';
import { Order } from '../models/order.model';
import { BasketService} from '../services/basket.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  dishes: Dish[] = [];

  constructor(
    readonly basketService: BasketService,
    readonly http: HttpClient
  ) { }

  getDishes(){
    this.dishes=this.basketService.getOrderList();
  }

  sendOrder(){
    this.getDishes();

    let dishIDs: number[] = [];
    for (let i=0; i<this.dishes.length; i++){
      dishIDs.push(this.dishes[i].id);
    }

    let order1: Order = {
      dishIds: dishIDs,
      name: "Arek",
      phone: 345353226,
      address: "Poznan",
      status: "inDelivery"
    }
  
    this.addOrder(order1).subscribe();
    
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('/api/orders', order);
  }


  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/orders');
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`/api/orders/${id}`);
  }


}
