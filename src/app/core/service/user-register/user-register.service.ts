import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from "../../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`http://localhost:3000/employees`, user);
  }

}
