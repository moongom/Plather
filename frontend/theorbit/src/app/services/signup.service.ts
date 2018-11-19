import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { SignUpType } from '../models/signuptype';
import { LogInType } from '../models/logintype';
import { DataService } from './data.service';
import * as global from '../global'

@Injectable({
  providedIn: 'root'
})

export class SignupService extends DataService {

  constructor(http: HttpClient) {
    super(global.endpoint, http);
   }

   private token: String;

  register(signuptype:SignUpType){
    return super.getHttp().post(global.endpoint + '/register', {email:signuptype.Email, screen_name:signuptype.Nickname, password:signuptype.Password, password_confirm:signuptype.Password_Confirm,  phone:signuptype.Phone}, {
      headers: super.getHttpOptions(),
    })
      .pipe(
        catchError(super.handleError)
      );
  }

  login(logintype:LogInType){

    return super.getHttp().post<any>(global.endpoint + '/login', {email:logintype.Email, password:logintype.Password},{
      headers: super.getHttpOptions(),
    })
      .pipe(map(response => {
        // login successful if there's a jwt token in the response
        if (response) {
          this.token=response;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: logintype.Email}));
        }
        return this.token;
    }));
  }
  logout() {
    // remove user from local storage to log user out
    this.token=null;
    localStorage.removeItem('currentUser');
  }

}
