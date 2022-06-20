import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = '';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  register(title: string, firstName: string, lastName: string,userName: string, email: string, password: string, confirmpassword: string, gender: string): Observable<any>{
    return this.http.post(AUTH_API + 'signup', {
      title,
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmpassword,
      gender
    },httpOptions)
  }
}
