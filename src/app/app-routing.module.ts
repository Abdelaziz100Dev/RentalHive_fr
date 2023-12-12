import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipmentComponent} from "./equipment/equipment.component";
import {TypeComponent} from "./type/type.component";
import {DemandComponent} from "./components/demand/demand.component";
import {DevisComponent} from "./components/devis/devis.component";
import {CreateDemandComponent} from "./components/demand/create/create-demand.component";

const routes: Routes = [
  {path : "equipments", component: EquipmentComponent},
  {path : "types", component: TypeComponent},
  {path : "demands", component: DemandComponent},
  {path : "devis/create", component: CreateDemandComponent},
  {path : "devis", component:DevisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
