import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RootObject} from '../model/model';

@Injectable({
  providedIn: 'root'
})

export class CustomerDisplayComponentService {

   private serviceUrl = '/app/model/model.json';
   constructor(private http: HttpClient) {}

   getDisplayComponent(): Observable<RootObject> {
      return this.http.get<RootObject>(this.serviceUrl);
   }
}
