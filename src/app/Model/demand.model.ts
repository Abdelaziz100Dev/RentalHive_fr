import {EquipmentDemandModel} from "./equipmentDemand.model";
import {UserModel} from "./User.model";

export class DemandModel {
  constructor(public id: number |null,
              public user: UserModel |null,
              public equipmentDemandModel: EquipmentDemandModel[]) {

  }

}
