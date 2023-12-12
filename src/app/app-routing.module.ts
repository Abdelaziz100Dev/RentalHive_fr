import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeComponent} from "./type/type.component";
import {EquipmentComponent} from "./equipment/equipment.component";
import { DemandComponent } from './demand/demand.component';
import {OfferComponent} from "./offer/offer.component";

const routes: Routes = [
  {path : "equipments", component: EquipmentComponent},
  {path : "types", component: TypeComponent},
  {path : "demands", component: DemandComponent},
  {path : "offers", component: OfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
