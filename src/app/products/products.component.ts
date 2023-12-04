import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductServiceService} from "../services/product/product-service.service";
import {Product} from "../Model/Product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products!: Observable<Array<Product>>;
  constructor(private prodectService : ProductServiceService) {

  }


    handleCheck(product : any) {
    this.prodectService.checkProducts(product).subscribe(
      {
        next: data => {
          console.log(data);
        },
        error: err => {
            console.log('error');
        }
      }
    )
    product.checked =! product.checked;
  }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.products = this.prodectService.getProducts();

  }
  deleteProduct(product: Product) {
    this.prodectService.deleteProduct(product).subscribe(
      {
        next : data =>{
          this.getAllProducts()

        }
      }
    )
  }
}
