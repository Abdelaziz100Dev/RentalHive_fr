import { Devis } from './devis.model';
import { EquipmentDemand } from './equipmentDemand.model';
import { User } from './user.model';
// import { demandStatus } from '../enums/demandStatus';
enum demandStatus{
  PENDING,
  DECLINED,
  APPROVED
}
export class Demand {
  constructor(
    public id: number,
    public status: demandStatus|null,
    public devis: Devis|null,
    public equipmentDemands:EquipmentDemand[],
    public user: User,
  ){}
}