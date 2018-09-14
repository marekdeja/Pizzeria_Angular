import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dish } from '../models/dish.model';
import { DishesService} from '../services/dishes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit, OnDestroy {
dishes: Dish[];
 sub: Subscription;

  constructor(
    readonly service: DishesService
  ) { }

  ngOnInit(): void {
    this.sub = this.service.getPizzas()
    .subscribe(res=>this.dishes = res);
  }

  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  showPastas(): void {
    this.sub = this.service.getPastas()
    .subscribe(res=>this.dishes = res);
  }

  showBeverages(): void {
    this.sub = this.service.getBeverages()
    .subscribe(res=>this.dishes = res);
  }


}
