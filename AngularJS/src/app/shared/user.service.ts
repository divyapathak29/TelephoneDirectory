import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable()
export class UserService {
  selectedUser: User;
  user: User[];
  readonly baseURL = 'http://localhost:3000/signup';
  readonly baseURLLogin = 'http://localhost:3000/login';

  constructor(private http : HttpClient) { }

  postUser(user : User){
    return this.http.post(this.baseURL, user);
  }

  postUserLogin(user : User){
    return this.http.post(this.baseURLLogin, user);
  }
}
