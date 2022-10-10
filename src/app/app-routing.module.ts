import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerEnquiryComponent } from './admin/view-customer-enquiry/view-customer-enquiry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisterComponent } from './registerUser/register.component';

const routes: Routes = [

{
  path:'' ,redirectTo:'dashboard',pathMatch:'full'
},
{
  path:'dashboard' ,component:DashboardComponent
},

{
  path:'login' ,component:LoginComponent
},
{
  path:'register' ,component:RegisterComponent
},
{
  path:'login/register' ,component:RegisterComponent
},
{
  path:'viewEnquiry' ,component:ViewCustomerEnquiryComponent
},
{
  path:'loginsuccess' ,component:LoginsuccessComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
