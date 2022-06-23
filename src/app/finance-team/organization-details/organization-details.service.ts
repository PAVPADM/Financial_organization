import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from './organization.model';



@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(private http: HttpClient) { }
  
  baseUrl3: string = 'http://localhost:8535/financeteam';
  baseUrl4: string = 'http://localhost:8535/financeteam/organizationValidation';

  
  
  getOrgList():Observable<any>
  {
    return this.http.get<any>(this.baseUrl4);
  }
  getOrgById(id:number):Observable<Organization>
  {
    return this.http.get<Organization>(this.baseUrl3+"/orgById"+"/Id/"+id);
  }
}



