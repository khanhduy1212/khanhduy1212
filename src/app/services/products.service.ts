import { Injectable } from '@angular/core';
import { Products } from './../models/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs'; 
 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions = {
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  };
  apiUrl = 'https://60ae6af05b8c300017dea7a4.mockapi.io/Products';
  constructor(private http:HttpClient) { }

  getAll():Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl).pipe();
  }

  get1Product(maSP:number):Observable<Products> {
    return this.http.get<Products>(`${this.apiUrl}/${maSP}`).pipe();
  }
}
