import { Demand } from "./demand.model";
import { EquipmentModel } from "./equipment.model";

export class EquipmentDemand {
  constructor(
    public id: number|null,
    public startDate: Date,
    public endDate: Date,
    public equipment: EquipmentModel,
    public demand: Demand ,
  ){}
}