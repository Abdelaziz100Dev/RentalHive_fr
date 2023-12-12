import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TypeComponent } from './type/type.component';
import { EquipmentComponent } from './equipment/equipment.component';
import {NgOptimizedImage} from "@angular/common";
import {DemandComponent} from "./components/demand/demand.component";
import {DevisComponent} from "./components/devis/devis.component";
import { CreateDemandComponent } from './components/demand/create/create-demand.component';
import { UpdateDemandComponent } from './components/demand/update/update-demand.component';

@NgModule({
  declarations:  [
    AppComponent,
    TypeComponent,
    EquipmentComponent,
    DemandComponent,
    DevisComponent,
    CreateDemandComponent,
    UpdateDemandComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
