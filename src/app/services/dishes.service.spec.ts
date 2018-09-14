import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { DishesService } from './dishes.service';

describe('DishesService', () => {
  let service: DishesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService,
        HttpClient,
        HttpHandler
      ]
    });
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));

  
  // it('should run getPizzas', fakeAsync(
  //   (done: DoneFn) => {
  //   service.getPizzas().subscribe(value => {
  //     expect(value).toBe('observable value');
  //     done();
  //   })
  // }));

});
