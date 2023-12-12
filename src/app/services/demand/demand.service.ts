import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {DemandModel} from "../../Model/demand.model";


@Injectable({
  providedIn: 'root'
})
export class DemandService {
  public URL = "http://localhost:8080/api/demands";

  constructor(private http :HttpClient) {

  }
  public deleteDemand(demand:DemandModel) {
    return this.http.delete<DemandModel>(this.URL+"/"+demand.id)

  }

  getAll() {
    return this.http.get<Array<any>>(this.URL)
  }

  getDemandByUser() {
    return this.http.get<Array<any>>(this.URL+"/withoutDevis")

  }
}
