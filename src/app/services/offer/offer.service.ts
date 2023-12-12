import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypeModel} from "../../Model/Type.model";
import {Offer} from "../../Model/offer.model";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private _offerServiceUrl = "http://localhost:8080/api/offer";
  constructor(private httpClient: HttpClient) { }

  public getOffers(): Observable<Array<Offer>> {
    return this.httpClient.get<Array<Offer>>(this._offerServiceUrl);
  }

  public deleteOffer(offer: Offer): Observable<Offer> {
    return this.httpClient.delete<Offer>(this._offerServiceUrl+`/${offer.id}`);
  }

  public sendOffer(offer: Offer): Observable<Offer> {
    return this.httpClient.get<Offer>(this._offerServiceUrl+`/${offer.id}/send`);
  }
}
