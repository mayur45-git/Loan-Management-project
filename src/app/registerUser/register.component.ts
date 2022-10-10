import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../models/register';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  register: Register = new Register();
  constructor(private fb: FormBuilder, private locat: Location, private regservices: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        id: 0,
        name: ['', [Validators.required, Validators.maxLength(15)]],
        address: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        gender: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required]

      }
    )
  }
  onSubmit() {

    console.log(this.register.name);
    console.log("in submit form");

    this.regservices.registercust(this.register).subscribe(data => {
      alert("Data Registered succesfully....")
    }, error => alert("Registration failed")
    );
    this.route.navigate(['/login']);



  }




  goBack() {
    this.locat.back();
  }

}
