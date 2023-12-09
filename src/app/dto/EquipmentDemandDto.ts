export class EquipmentDemandDto {
constructor(
        public startDate: Date,
        public endDate: Date,
        public equipmentId: number,
    ){}
}