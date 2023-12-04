import { Injectable } from '@angular/core';
import {Product} from "../../Model/Product.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  constructor(private httpClient : HttpClient) { }
  public saveProduct(product: Product): Observable<Product>   {
    return this.httpClient.post<Product>(`http://localhost:3000/product`,product);
  }
}
