import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { Observable, of } from 'rxjs';
import * as global from '../global'

// @Injectable({
//   providedIn: 'root'
// })

export class DataService {
  
  constructor(private url: string, private http: HttpClient) { }

  private httpOptions = new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') });

  getHttp(){
    return this.http;
  }

  getHttpOptions(){
    return this.httpOptions;
  }

  getAll() {
    return this.http.get(this.url);
  }

  create(resource) {
    return this.http.post(this.url + '/', JSON.stringify(resource), {
      headers: this.getHttpOptions()
    })
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, JSON.stringify({
      isRead: true
    }), {
      headers: this.getHttpOptions()
    })
  }

  delete(resource) {
    return this.http.delete(this.url + '/' + resource.id)
  }

  protected handleError(error: Response) {
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
