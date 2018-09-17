import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dish } from '../models/dish.model';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../services/dishes.service';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit, OnDestroy {

  dish: Dish;
  sub: Subscription;
  sub2: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: DishesService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.sub = this.service.getDish(+id)
      .subscribe(res => this.dish = res);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }

  goBack(): void {
    this.location.back();
  }

  checkExist(exist): string {
    if (exist) {
      return "Dostępny";
    }
    return "Niedostępny";
  }

  changeExist(dish: Dish): void {

    if (dish.isAvailable) {
      dish.isAvailable = false;
    } else {
      dish.isAvailable = true;
    }
    
     this.sub2 = this.service.updateDish(dish).subscribe();
     
  }

  deleteDish(dish){
    this.service.deleteDish(dish).subscribe();
    this.goBack();
  }


}
