import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dish } from '../models/dish.model';
import { DishesService} from '../services/dishes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})

export class AdminListComponent implements OnInit {
  dishes: Dish[];
  sub: Subscription;
 
   constructor(
     readonly service: DishesService
   ) { }
 
   ngOnInit(): void {
     this.sub = this.service.getDishes()
     .subscribe(res=>this.dishes = res);
   }
 
   ngOnDestroy(): void {
     this.sub.unsubscribe();
   }


}
