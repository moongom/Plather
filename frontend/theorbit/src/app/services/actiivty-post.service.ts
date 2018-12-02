import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import * as global from '../global'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActiivtyPostService extends DataService{

  constructor(http: HttpClient) {
    super(global.endpoint + '/activity_posts/', http);
  }

  getActivitiesWithSupertag(supertag: String){
    let url = super.getUrl() + 'filter/' + supertag;
    return this.http.get(url);
  }

}
