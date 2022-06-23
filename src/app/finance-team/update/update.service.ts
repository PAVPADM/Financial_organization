import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Update } from './Update.model';




@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }
  
  baseUrl3: string = 'http://localhost:8535/financeteam/';
  baseUrl4: string = 'http://localhost:8535/financeteam/organizationValidation/';
  baseUrl5:string  = 'http://localhost:8535/financeteam/update/';

  
  
  updateRating(update:Update):Observable<any>
  {
    return this.http.put<any>(this.baseUrl5,update);
    
  }
  
}



