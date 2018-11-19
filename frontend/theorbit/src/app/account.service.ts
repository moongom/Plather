import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BadInput } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';
import { AppError } from './common/app-error';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  email:string;
  endpoint;
  constructor(public http: HttpClient) {

   }

   getUser() {
    this.email = JSON.parse(localStorage.getItem('currentUser')).email;
    this.endpoint = 'http://localhost:8000/api/users/'
    this.endpoint = this.endpoint+this.email+'/';
    return this.http.get<any>(this.endpoint)
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  // private handleError(error: Response) {
  //   if (error.status === 400)
  //     return Observable.throw(new BadInput(error.json()));

  //   if (error.status === 404)
  //     return Observable.throw(new NotFoundError());

  //   return Observable.throw(new AppError(error));
  // }
}

