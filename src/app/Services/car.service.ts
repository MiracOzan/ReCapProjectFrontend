import { SingleResponseModel } from './../Models/singleResponseModel';
import { ResponseModel } from './../Models/responseModel';
import { Car } from './../Models/car';
import { ListResponseModel } from './../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44396/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

 

  getCarById(id: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }



  add(car: Car): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/add';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  update(car: Car): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/update';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
}
