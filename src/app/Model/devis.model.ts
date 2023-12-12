
import { Offer } from "./offer.model";

export class Devis{
    constructor(
        public id: number,
        public price: number,
        public date: Date,
        public demandId: number,
        public offer:Offer
    ){}
}
export  class DevisModel{
  constructor(public id:number|null,
              public demand_id:number|null,
              public status:String,
              public  price:number,
              public date:Date) {
  }
}

