import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { User } from './../../shared/user.model';
import { UserService } from './../../shared/user.service';

declare var M: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  
  constructor(private UserService : UserService, private Router : Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
        form.reset();
        this.UserService.selectedUser = { 
          _id: "",
          username: "",         
          password : ""
        }
  }

  onSubmit(form : NgForm) {       
    this.UserService.postUser(form.value).subscribe((res) => {
      this.resetForm(form);      
      M.toast({html: 'User registered successfully', classes: 'rounded'});
      this.Router.navigate(['/login']);
    });    
  }
}
