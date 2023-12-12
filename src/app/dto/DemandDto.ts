import { EquipmentDemandDto } from "./EquipmentDemandDto";

export class DemandDto {
    public demands: EquipmentDemandDto[]=[];
    constructor(
        public userId: number,
    )  {}
    setDemands(demands: EquipmentDemandDto): void {
        this.demands.push(demands); // Use push method to append new element
    }
}