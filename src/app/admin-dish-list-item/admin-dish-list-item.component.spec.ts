import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDishListItemComponent } from './admin-dish-list-item.component';

describe('AdminDishListItemComponent', () => {
  let component: AdminDishListItemComponent;
  let fixture: ComponentFixture<AdminDishListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDishListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
