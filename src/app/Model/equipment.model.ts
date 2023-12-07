import {TypeModel} from "./Type.model";

export class EquipmentModel {
   constructor(public id: number |null,
              public imag: string,
              public name: string,
              public pricePerDay : number,
              public creationDate : Date,
              public type : TypeModel | null)
  {}

}

