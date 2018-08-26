import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BadInput } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';
import { AppError } from './common/app-error';
import { SignUpType } from './models/signuptype';
import { LogInType } from './models/logintype';



const endpoint_login = 'http://localhost:8000/api/login/'
const endpoint_register= 'http://localhost:8000/api/register/'




@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  public token: String;
  register(signuptype:SignUpType){
    return this.http.post(endpoint_register, {email:signuptype.Email, screen_name:signuptype.Nickname, password:signuptype.Password, password_confirm:signuptype.Password_Confirm,  phone:signuptype.Phone}, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') }),
    })
      .pipe(
        catchError(this.handleError)
      );
  }


  login(logintype:LogInType){

    // var httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') }),
    // };

    return this.http.post<any>(endpoint_login, {email:logintype.Email, password:logintype.Password},{
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') }),
    })
    .pipe(map(response => {
      // login successful if there's a jwt token in the response
      if (response) {
        this.token=response;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(this.token));
          
      }

      return this.token;
  }));
}
logout() {
  // remove user from local storage to log user out
  this.token=null;
  localStorage.removeItem('currentUser');
}


  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }

  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return decodeURIComponent(parts.pop().split(";").shift());
  }
}
