import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import  { HttpClientTestingModule,  HttpTestingController }  from  '@angular/common/http/testing';
import { DishesService } from './dishes.service';

fdescribe('DishesService', () => {
  let service: DishesService;
  let  httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService,
        HttpClient,
        HttpHandler
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

    //then
    const  req = httpMock.expectOne(newReq => newReq.url  ===  '/api/orders');
    expect(req.request.method).toEqual('GET');


    httpMock.verify();

  }));


});
