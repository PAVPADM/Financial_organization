import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../apiResponse';
import {  UserFeedBackDto } from '../model/feedback';
import { UserRegistration } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl1: string = "http://localhost:8080/financial/users";
  baseUrl2: string = 'http://localhost:8080/financial/users/RegisteredUsers';
  baseUrl3: string = 'http://localhost:8080/financial/users/browsebyentity';
  baseUrl4: string = 'http://localhost:8080/financial/users/Id/orgId';
  baseUrl5: string = 'http://localhost:8080/financial/users/FeedBack';

  userRegistration(user: UserRegistration): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl1, user);}
    getUsersDetails(): Observable<any> {
      return this.http.get<any>(this.baseUrl2);}
      getDetailsByEntity() : Observable<any> {
      return this.http.get<any>(this.baseUrl3); }
      getDetailsByEntityId(orgId: number): Observable<any> {
        return this.http.get<any>(this.baseUrl1+'/Id/' +orgId);
      }
      addFeedBack(feedback:UserFeedBackDto): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.baseUrl5, feedback);}
}
