import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Dish } from '../models/dish.model';
import { map }  from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(
   readonly http: HttpClient,
  ) { }

  getPizzas(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y=>y.isAvailable===true && y.type==="pizza"))
    );
  }

  getPastas(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y=>y.isAvailable===true && y.type==="pasta"))
    );
  }

  getBeverages(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y=>y.isAvailable===true && y.type==="beverage"))
    );
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes');
  }
  
  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(`/api/dishes/${id}`);
  }

  // addDish(dish):void{
  //   this.service.addDish(dish);
  // }

}
