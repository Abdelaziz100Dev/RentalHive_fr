import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../services/equipment/equipment.service";
import {Observable} from "rxjs";
import {EquipmentModel} from "../Model/equipment.model";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(private equipmentService: EquipmentService) {}
  equipments!: Observable<Array<EquipmentModel>>;
  ngOnInit(): void {
    this.getEquipments();
  }

  getEquipments(): void {
    this.equipments = this.equipmentService.getEquipment();
  }

  deleteEquipment(equipment: EquipmentModel) {

  }

  updateEquipment(equipment: EquipmentModel) {

  }
}
