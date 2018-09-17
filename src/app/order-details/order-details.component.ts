import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dish } from '../models/dish.model';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../services/dishes.service';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Subscription, forkJoin } from 'rxjs';
import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order: Order;
  sub: Subscription;
  sub2: Subscription;
  dishes: Dish[] = [];
  dishesCustomer: Dish[] = [];
  customerDishIds = [];


  dishesCustomerUnique = [];
  amountsDishesCustomer = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: OrderService,
    private readonly dishesService: DishesService,
    private location: Location
  ) { }

  ngOnInit() {
    let subCount = 0;
    const id = this.route.snapshot.paramMap.get('id');

    this.sub = forkJoin([
      this.service.getOrder(+id),
      this.dishesService.getDishes()
    ]).subscribe(([order, dishes]) => {
      this.order = order;
      this.dishes = dishes;
      this.getOrder(this.order);
      this.getDishesCustomerUnique();
      this.getAmountsDishesCustomer();
    });


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();


  }

  goBack(): void {
    this.location.back();
  }

  getOrder(order: Order) {
    this.dishesCustomer = [];


    this.customerDishIds = order.dishIds;
    for (let i = 0; i < this.customerDishIds.length; i++) {
      this.dishesCustomer.push(this.dishes[this.customerDishIds[i] - 1]);
    }

    return this.dishesCustomer;
  }

  getDishesCustomerUnique() {
    this.dishesCustomerUnique = Array.from(new Set(this.dishesCustomer));
  }

  getAmountsDishesCustomer() {
    for (let i = 0; i < this.dishesCustomerUnique.length; i++) {
      let amount = 0;
      for (let j = 0; j < this.dishesCustomer.length; j++) {
        if (this.dishesCustomerUnique[i] === this.dishesCustomer[j]) {
          amount++;
        }
      }
      this.amountsDishesCustomer.push(amount);
    }

  }

  getTotalPrice() {
    let totalPrice: number = 0;


    for (let i = 0; i < this.dishesCustomer.length; i++) {
      if (this.dishesCustomer[i]) {
        let elementPrice: number = +this.dishesCustomer[i].price;
        totalPrice += elementPrice;
      }

    }
    return totalPrice.toFixed(2);
  }

  changeStatus(order, elem) {
    var e = document.getElementById("orderSelect") as HTMLSelectElement;
    var statusDOM = e.options[e.selectedIndex].value;
    order.status = statusDOM;
    console.log(statusDOM);
    this.sub2 = this.service.updateOrder(order).subscribe();
  }

  translateStatus(order) {
    var e = document.getElementById("orderSelect") as HTMLSelectElement;
    e.selectedIndex = 0;

    let orderStatus = order.status;
    switch (orderStatus) {
      case "ordered":
        return "Zamowiony";
      case "readyToDeliver":
        return "Gotowy do dowozu";
      case "inDelivery":
        return "W dowozie";
      case "delivered":
        return "Dostarczono";
    }
  }

  deleteOrder(order){
    this.service.deleteOrder(order).subscribe();
    this.goBack();
  }

}
