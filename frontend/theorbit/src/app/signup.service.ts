import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BadInput } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';
import { AppError } from './common/app-error';
import { SignUpType } from './models/signuptype';
import { LogInType } from './models/logintype';



const endpoint = ''

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  public token: String;
  register(signuptype:SignUpType){
    httpOptions.headers.append('X-CSRFToken', this.getCookie('csrftoken'))
    return this.http.post(endpoint, {user_id:signuptype.ID, nickname:signuptype.Nickname, password:signuptype.Password, password_confirm:signuptype.Password_Confirm, email:signuptype.Email, phone:signuptype.Phone}, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  login(logintype:LogInType){
    httpOptions.headers.append('X-CSRFToken', this.getCookie('csrftoken'))
    return this.http.post<any>(endpoint, {user_id:logintype.ID, password:logintype.Password}, httpOptions)
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;
  }));
}
logout() {
  // remove user from local storage to log user out
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
