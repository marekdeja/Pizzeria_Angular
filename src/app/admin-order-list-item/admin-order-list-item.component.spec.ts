import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderListItemComponent } from './admin-order-list-item.component';

describe('AdminOrderListItemComponent', () => {
  let component: AdminOrderListItemComponent;
  let fixture: ComponentFixture<AdminOrderListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
