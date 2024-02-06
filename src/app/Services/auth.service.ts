import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {       // set token will Recive the token and it will Store in the local storage 
    localStorage.setItem('token', token);                   
  }

  getToken(): string | null {   // get token will return form the local storage
    return localStorage.getItem('token');
  }

  isLoggedIn() {  // is logged in will check the token is present or not inside the local storage
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token'); // remove the token from local storage 
    this.router.navigate(['login']);  // and navicate to login page
  }

  login({ name , password }: any): Observable<any> {  // here we recive the name and password by object
    if (name === 'NaveenKumar@gmail.com' && password === 'ksdgfsdhfhf@123') { // this ia a stactic check method
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'NaveenKumar@gmail.com', password: 'ksdgfsdhfhf@123'});
    }
    return throwError(new Error('Failed to login'));
  }
}