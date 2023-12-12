import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DevisModel} from "../../Model/devis.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DevisService {


  public URL = "http://localhost:8080/api/devis";

  constructor(private http :HttpClient) {

  }
  public deleteDevis(devis:DevisModel) {
    return this.http.delete<DevisModel>(this.URL+"/"+devis.id);

  }

  getAll() {
    return this.http.get<Array<any>>(this.URL);
  }

  toggleDevisStatus(devis: DevisModel) {
    return this.http.post<DevisModel>(this.URL+"/toggleStatus/"+devis.id,DevisModel)
  }
  public updateDevis(devis: DevisModel): Observable<DevisModel> {
    return this.http.patch<DevisModel>(this.URL+"/"+devis.id,devis);
  }

  public saveDevis(devis: { date: any; price: any; demand_id: any }): Observable<DevisModel> {
    return this.http.post<DevisModel>(this.URL,devis);
  }
}
