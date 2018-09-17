import { Dish } from './../models/dish.model';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import  { HttpClientTestingModule,  HttpTestingController }  from  '@angular/common/http/testing';
import { DishesService } from './dishes.service';

describe('DishesService', () => {
  // let service: DishesService;
  // let  httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));


  it('should run getPizzas', inject([HttpTestingController, DishesService],  (httpMock: HttpTestingController, service: DishesService) => {

    //when
    service.getPizzas().subscribe();
    const data = [<Dish>{  }];

    //then
    const  req = httpMock.expectOne('/api/dishes');
    expect(req.request.method).toEqual('GET');

    
    req.flush(data);

    httpMock.verify();

  }));


});
