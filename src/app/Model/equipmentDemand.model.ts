export class EquipmentDemandModel {
  constructor(public id: number |null,
              public equipmentId: number |null,
              public endDate:Date,
              public startDate:Date) {}
}
