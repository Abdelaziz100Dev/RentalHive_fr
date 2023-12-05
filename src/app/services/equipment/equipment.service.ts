import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EquipmentModel} from "../../Model/equipment.model";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private _typeServiceUrl = "http://localhost:8080/api/equipments";

  constructor(private httpClient : HttpClient) {}

  public getEquipment() : Observable<Array<EquipmentModel>>{
    return this.httpClient.get<Array<EquipmentModel>>(this._typeServiceUrl)
  }

  public saveEquipment(equipment:EquipmentModel): Observable<EquipmentModel>{
    return this.httpClient.post<EquipmentModel>(this._typeServiceUrl, equipment);
  }

  public deleteEquipment(equipment: EquipmentModel): Observable<EquipmentModel> {
    return this.httpClient.delete<EquipmentModel>(this._typeServiceUrl+`/${equipment.id}`);
  }

  public updateEquipment(equipment: EquipmentModel): Observable<EquipmentModel> {
    return this.httpClient.patch<EquipmentModel>(this._typeServiceUrl,equipment);
  }
}
