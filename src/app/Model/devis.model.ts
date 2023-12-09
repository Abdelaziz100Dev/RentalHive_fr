import { Offer } from "./offer.model";

export class Devis{
    constructor(
        public id: number,
        public price: number,
        public date: Date,
        public demandId: number,
        public offfer:Offer
    ){}
}