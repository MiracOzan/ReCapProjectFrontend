import { AuthService } from './auth.service';
import { ResponseModel } from './../Models/responseModel';
import { SingleResponseModel } from './../Models/singleResponseModel';
import { User } from './../Models/user';
import { ListResponseModel } from './../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://localhost:44396/api/';
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<ListResponseModel<User>> {
    let newPath = this.apiUrl + 'users/getall';
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  getUserById(userId: number): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + 'users/getbyid?id=' + userId;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  getUserByEmail(email: string): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + 'users/getbyemail?email=' + email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  update(user: User): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'users/update';
    return this.httpClient.post<ResponseModel>(newPath, user);
  }
}
