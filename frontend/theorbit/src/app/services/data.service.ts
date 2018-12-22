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

  constructor(protected url: string, protected http: HttpClient) { }

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

  getUrl() {
    return this.url;
  }

  create(resource) {
    console.log(this.getHttpOptions())
    return this.http.post(this.url , JSON.stringify(resource), {
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
    document.cookie="csrftoken=Ap1KMXoh9qhYWQ1SrLRyXPGf8ESrOje7dHALQOIDUPKmki924M3nz9PmuZPSL8oD; __utmz=96992031.1543025663.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=96992031.465936347.1543025663.1543025663.1543028817.2"
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return decodeURIComponent(parts.pop().split(";").shift());
  }
}
