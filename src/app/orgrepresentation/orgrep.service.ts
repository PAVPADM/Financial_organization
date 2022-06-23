import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { OrganizationRep } from '../model/OrganizationRep';
import { OrganizationRepRegistrationDto } from '../model/OrganizationRepRegistrationDto';
import { orgrepReg } from '../model/orgrepReg';

@Injectable({
  providedIn: 'root'
  
})
export class OrgrepService {

  constructor(private http:HttpClient) { }
  baseUrl1:string='http://localhost:8535/financial/orgrep/Registration/';
  baseUrl2:string='http://localhost:8535/financial/orgrep/UpdateDetails/';
  baseUrl3:string='http://localhost:8535/financial/orgrep/DeleteById/Id/';
  baseUrl4:string='http://localhost:8535/financial/orgrep/getbyOrgId/Id/';

  addOrganizationRep(orgrep:OrganizationRepRegistrationDto):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl1,orgrep);
  }

  updateDetails(orgrep:orgrepReg):Observable<ApiResponse>{
    return this.http.put<ApiResponse>(this.baseUrl2,orgrep);
  }

  deleteOrganizationDetails(id:number):Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(this.baseUrl3 + id);
  }
  getByEntityId(id:number):Observable<OrganizationRep>{
    return this.http.get<OrganizationRep>(this.baseUrl4 + id);
  }
}
