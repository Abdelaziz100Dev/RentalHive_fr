import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductsComponent} from "./new-products/new-products.component";
import {TypeComponent} from "./type/type.component";
import {EquipmentComponent} from "./equipment/equipment.component";

const routes: Routes = [
  {path : "home", component: HomeComponent},
  {path : "products", component: ProductsComponent},
  {path : "new-products", component: NewProductsComponent},
  {path : "equipments", component: EquipmentComponent},
  {path : "types", component: TypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
