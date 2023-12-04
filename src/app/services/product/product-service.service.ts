import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../Model/Product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient : HttpClient) { }

  public  getProducts() :  Observable<Array<Product>>{
      return this.httpClient.get<Array<Product>>('http://localhost:3000/product')
  }

  public  checkProducts(product: Product) : Observable<Product>{
      return this.httpClient.patch<Product>(`http://localhost:3000/product/${product.id}`,
        {checked: !product.checked}
      )
  }
   public deleteProduct(product: Product){
      return this.httpClient.delete(`http://localhost:3000/product/${product.id}`);
   }

   public saveProduct(product: Product): Observable<Product>   {
       return this.httpClient.post<Product>(`http://localhost:3000/product`,product);
   }
}
