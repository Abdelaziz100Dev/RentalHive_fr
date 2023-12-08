import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {EquipmentModel} from "../../Model/equipment.model";
import {EquipmentModelDto} from "../../Model/equipmentDto.model";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private _typeServiceUrl = "http://localhost:8080/api/equipments";

  constructor(private httpClient : HttpClient) {}

  public getEquipment() : Observable<Array<EquipmentModel>>{
    return this.httpClient.get<Array<EquipmentModel>>(this._typeServiceUrl)
  }

  public saveEquipment(formData: FormData): Observable<EquipmentModelDto>{
    console.log(formData.getAll("img"));
    return this.httpClient.post<EquipmentModelDto>(this._typeServiceUrl, formData);
  }

  public deleteEquipment(equipment: EquipmentModel): Observable<EquipmentModel> {
    return this.httpClient.delete<EquipmentModel>(this._typeServiceUrl+`/${equipment.id}`);
  }

  public updateEquipment(equipment: EquipmentModel): Observable<EquipmentModel> {
    return this.httpClient.patch<EquipmentModel>(this._typeServiceUrl,equipment);
  }
}
