import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from 'src/app/Model/demand.model';
import { EquipmentDemand } from 'src/app/Model/equipmentDemand.model';

@Injectable({
providedIn: 'root'
})
export class DemandService {
  private _demandServiceUrl = "http://localhost:8080/api/demands";

  constructor(private httpClient:HttpClient) { }

  public getDemands():Observable<Array<Demand>> {
    return  this.httpClient.get<Array<Demand>>(this._demandServiceUrl);
  }

  public getEquipmentDemand(id: number): Observable<EquipmentDemand> {
    return this.httpClient.get<EquipmentDemand>('http://localhost:8080/api/demands/reservations/' + id);
  }
}
