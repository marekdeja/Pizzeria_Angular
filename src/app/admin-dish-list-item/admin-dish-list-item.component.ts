import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-admin-dish-list-item',
  templateUrl: './admin-dish-list-item.component.html',
  styleUrls: ['./admin-dish-list-item.component.scss']
})
export class AdminDishListItemComponent implements OnInit {

  @Input() dish: Dish;

  constructor() { }

  ngOnInit() {
  }

}
