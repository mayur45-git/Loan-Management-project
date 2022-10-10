import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerEnquiryComponent } from './view-customer-enquiry.component';

describe('ViewCustomerEnquiryComponent', () => {
  let component: ViewCustomerEnquiryComponent;
  let fixture: ComponentFixture<ViewCustomerEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomerEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
