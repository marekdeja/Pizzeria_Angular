import { Component, OnInit, Input  } from '@angular/core';
import { Dish } from '../models/dish.model';
import { BasketService } from '../services/basket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  dishes: Dish[];
  dishesToDisplay: Dish[];
  totalPrice: number;
 

  constructor(
    readonly service: BasketService
  ) {

  }

  ngOnInit(): void {
    this.dishesToDisplay = this.service.getOrderListToDisplay();
  }
  
  deleteDish(dish): void{
    this.service.deleteDish(dish);
  }

}




