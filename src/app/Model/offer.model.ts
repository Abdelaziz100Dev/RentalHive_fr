import { Devis } from "./devis.model";

export class Offer{
    constructor(
        public id: number,
        public startDate: Date,
        public endDate: Date,
        public devis: Devis,
    ){}
}