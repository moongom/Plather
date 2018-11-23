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
    super(global.endpoint + '/api/userposts/', http);
    // super(global.endpoint + '/api/generalpost/1/', http);
  }
 
}
