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
      map(x => x.filter(y=>y.isAvailable===true))
    );;
  }

  getPastas(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/pastas').pipe(
      map(x => x.filter(y=>y.isAvailable===true))
    );;
  }

  getBeverages(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/beverages').pipe(
      map(x => x.filter(y=>y.isAvailable===true))
    );
  }


  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(`/api/dishes/${id}`);
  }

}
