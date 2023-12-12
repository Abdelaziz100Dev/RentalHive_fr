
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {DemandModel} from "../../Model/demand.model";
import { Demand } from 'src/app/Model/demand.model';
import { EquipmentDemand } from 'src/app/Model/equipmentDemand.model';
import { DemandDto } from 'src/app/dto/DemandDto';
import { EquipmentDemandDto } from 'src/app/dto/EquipmentDemandDto';

@Injectable({
providedIn: 'root'
})
export class DemandService {
  private _demandServiceUrl = "http://localhost:8080/api/demands";
  public URL = "http://localhost:8080/api/demands";

  constructor(private httpClient:HttpClient) { }




  public deleteDemand(demand:DemandModel) {
    return this.httpClient.delete<DemandModel>(this.URL+"/"+demand.id)

  }

  getAll() {
    return this.httpClient.get<Array<any>>(this.URL)
  }

  getDemandByUser() {
    return this.httpClient.get<Array<any>>(this.URL + "/withoutDevis")
  }
  public getDemands():Observable<Array<Demand>> {
    return  this.httpClient.get<Array<Demand>>(this._demandServiceUrl);
  }

  public getEquipmentDemand(id: number): Observable<EquipmentDemand[]> {
    return this.httpClient.get<EquipmentDemand[]>('http://localhost:8080/api/demands/reservations' + id);
  }
  public save(demand: EquipmentDemandDto):  Observable<Demand> {
    let demandDto:DemandDto = new DemandDto(1);
    demandDto.setDemands(demand);
    return this.httpClient.post<Demand>("http://localhost:8080/api/demands/" , demandDto);
  }
}
