import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-dish-list-item',
  templateUrl: './dish-list-item.component.html',
  styleUrls: ['./dish-list-item.component.scss']
})
export class DishListItemComponent  {

  @Input() dish: Dish;

  constructor() { }
}
