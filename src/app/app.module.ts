import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TypeComponent } from './type/type.component';
import { EquipmentComponent } from './equipment/equipment.component';
import {NgOptimizedImage} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemandComponent } from './demand/demand.component';
import { DemandService } from './services/demand/demand.service';
import { OfferComponent } from './offer/offer.component';
@NgModule({
  declarations:  [
    AppComponent,
    TypeComponent,
    EquipmentComponent,
    DemandComponent,
    OfferComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgOptimizedImage,
        BrowserAnimationsModule,
    ],
  providers: [DemandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
