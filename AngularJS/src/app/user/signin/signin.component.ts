import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { User } from './../../shared/user.model';
import { UserService } from './../../shared/user.service';

declare var M : any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]
})
export class SignInComponent implements OnInit {

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
    this.UserService.postUserLogin(form.value).subscribe((res) => { 
      if (res.err_msg != "" && res.err_msg=== "Login invalid") { 
        M.toast({html: res.err_msg, classes: 'rounded red'});
      } else {
        this.resetForm(form);      
        M.toast({html: 'User logged in successfully', classes: 'rounded green'});
        this.Router.navigate(['/contacts']);
      }     
    });    
  }
}
