import { ResponseModel } from './../Models/responseModel';
import { RegisterModel } from './../Models/registerModul';
import { SingleResponseModel } from './../Models/singleResponseModel';
import { Observable } from "rxjs";
import { TokenModel } from './../Models/tokenModel';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../Models/loginModul';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44396/api/';

  constructor(private httpClient: HttpClient) {}

  login(user: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    this.setUserName(user.email);
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'auth/login',
      user
    );
  }

  register(user: RegisterModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'auth/register',
      user
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  setUserName(fullName: string) {
    localStorage.setItem('fullName', fullName);
  }

  getEmail(): string {
    return JSON.stringify(localStorage.getItem('fullName'));
  }
}
