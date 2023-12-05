import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeComponent} from "./type/type.component";
import {EquipmentComponent} from "./equipment/equipment.component";

const routes: Routes = [
  {path : "equipments", component: EquipmentComponent},
  {path : "types", component: TypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
