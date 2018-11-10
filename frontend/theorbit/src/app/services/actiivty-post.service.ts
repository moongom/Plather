import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import * as global from '../global'

@Injectable({
  providedIn: 'root'
})

export class ActiivtyPostService extends DataService{
  
  constructor(http: HttpClient) { 
    super(global.endpoint + '/activity_posts', http);
  }
}
