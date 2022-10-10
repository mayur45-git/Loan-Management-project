
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import{Register} from'../models/register';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
regobj=new Register();
  msg:string
  constructor(private fb:FormBuilder, private route: Router,private services:ServicesService) { }

  ngOnInit(): void {
    this.createLoginForm();

  }
  
  createLoginForm(){
   this.loginForm=this.fb.group(
   {
        username:['', Validators.required],
        password:['', Validators.required]
        
   }
    )
  }

  onLoginSubmit()
  {
    if(this.loginForm.get('username').value=="admin"&& this.loginForm.get('password').value=="admin"){
      this.route.navigate(['/viewEnquiry']);
    }
    else
    {
      this.services.loginUserFromRemote(this.regobj).subscribe
      (
        
             data => {
               console.log("response received");
               console.log(this.regobj)
               this.route.navigate(['/loginsuccess'])

             },
          
          error =>{
            console.log(this.regobj.username !=null && this.regobj.password !=null)
            console.log("exception Occured")
            this.msg="BAD CREDENTIALSS.!!!!!!!";
            alert("BAD CREDENTIALS.!!!!!!!")
          }   
      )

      }
    }

    }
  


