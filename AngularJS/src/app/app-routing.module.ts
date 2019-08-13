import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './user/signup/signup.component';
import { SignInComponent } from './user/signin/signin.component';


const routes: Routes = [
  { path: 'contacts', component: ContactComponent },
  { path: '', component: SignupComponent },
  { path: 'login', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
