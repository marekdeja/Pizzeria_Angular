import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../models/dish.model';
import { BasketService} from '../services/basket.service';

@Component({
  selector: 'app-dish-list-item',
  templateUrl: './dish-list-item.component.html',
  styleUrls: ['./dish-list-item.component.scss']
})
export class DishListItemComponent  {

  @Input() dish: Dish;

  constructor(
    readonly service: BasketService
    ) { }

  addDish(dish): void{
    this.service.addDish(dish);
  }

  
}
