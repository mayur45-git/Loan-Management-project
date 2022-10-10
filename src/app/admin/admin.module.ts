import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCustomerEnquiryComponent } from './view-customer-enquiry/view-customer-enquiry.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';



@NgModule({
  declarations: [
    ViewCustomerEnquiryComponent,
    EnquiryformComponent 
  ],
  imports: [
    CommonModule,
    NgModule
  ],
  exports:[
    ViewCustomerEnquiryComponent
  ]
})
export class AdminModule { }
