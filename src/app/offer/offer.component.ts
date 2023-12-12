import {Component, OnInit} from '@angular/core';
import {Offer} from "../Model/offer.model";
import {OfferService} from "../services/offer/offer.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit{

  offers!: Observable<Array<Offer>>

  constructor(private offerService : OfferService) {}

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.offers = this.offerService.getOffers();
  }

  deleteOffer(offer: Offer): void {
    this.offerService.deleteOffer(offer).subscribe(
      () => this.getOffers()
    )
  }
}
