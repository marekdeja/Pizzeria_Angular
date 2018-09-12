import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  dishes: Dish[] = [];
  dishesToDisplay: Dish[] = [];
  totalPrice: number = 0;

  constructor(
  ) { }

  getOrderList(): Dish[] {
    return this.dishes;
  }

  getOrderListToDisplay(): Dish[] {
    return this.dishesToDisplay;
  }

  addDish(dish): void {
    let amount: number = 1;
    for (let i = 0; i < this.dishes.length; i++) {
      if (this.dishes[i] === dish) {
        amount++;
      }
    }
    if (amount > 1) {
      this.dishes.push(dish);
    }
    else {
      this.dishes.push(dish);
      this.dishesToDisplay.push(dish);
    }
    this.countTotal();
  }

  countDish(dish): number {
    let amount: number = 0;
    for (let i = 0; i < this.dishes.length; i++) {
      if (this.dishes[i] === dish) {
        amount++;
      }
    }
    return amount;
  }

  deleteDish(dish): void {
    if (this.countDish(dish) === 1) {
      let element = this.dishes.indexOf(dish);
      this.dishes.splice(element, 1);

      let element2 = this.dishesToDisplay.indexOf(dish);
      this.dishesToDisplay.splice(element2, 1);
    }
    else {
      let element = this.dishes.indexOf(dish);
      this.dishes.splice(element, 1);
    }

  }

  countTotal(): string {
    this.totalPrice = 0;
    for (let i = 0; i < this.dishes.length; i++) {
      let myNumber: number = +this.dishes[i].price;
      this.totalPrice += myNumber;
    }
    return this.totalPrice.toFixed(2);
  }


}
