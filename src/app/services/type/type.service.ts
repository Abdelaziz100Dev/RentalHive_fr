import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypeModel} from "../../Model/Type.model";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private _typeServiceUrl = "http://localhost:8080/api/types";
  constructor(private httpClient: HttpClient) { }

  public getTypes(): Observable<Array<TypeModel>> {
    return this.httpClient.get<Array<TypeModel>>(this._typeServiceUrl);
  }

  public deleteTypes(typeModel: TypeModel): Observable<TypeModel> {
     return this.httpClient.delete<TypeModel>(this._typeServiceUrl+`/${typeModel.id}`);
  }

  public saveType(typeModel: TypeModel): Observable<TypeModel>{
    return this.httpClient.post<TypeModel>(this._typeServiceUrl, typeModel);
  }

  public getTypeByName(typeModel: TypeModel): Observable<TypeModel> {
      return this.httpClient.get<TypeModel>(this._typeServiceUrl + `/${typeModel.name}`);
  }

  public updateType(typeModel: TypeModel): Observable<TypeModel>{
    return this.httpClient.patch<TypeModel>(this._typeServiceUrl + `/${typeModel.id}`, typeModel);
  }
}
