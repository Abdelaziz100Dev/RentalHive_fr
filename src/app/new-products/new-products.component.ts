import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../services/product/product-service.service";

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  public  productForm!: FormGroup;
  constructor(private formBuilder : FormBuilder,private newPructureService : ProductServiceService) {
  }
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      id:this.formBuilder.control(''),
      name:this.formBuilder.control(''),
      checked:this.formBuilder.control('')
    })
  }

  saveProduct() {
    let product = this.productForm.value;
    this.newPructureService.saveProduct(product).subscribe(
      {
        next: data => {
          console.log(data);
          this.productForm.reset()
        },
        error: err => {
          console.log('error');
        }
      }
    )

  }
}
