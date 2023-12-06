import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../services/equipment/equipment.service";
import {Observable} from "rxjs";
import {EquipmentModel} from "../Model/equipment.model";
import {EquipmentModelDto} from "../Model/equipmentDto.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TypeService} from "../services/type/type.service";
import {TypeModel} from "../Model/Type.model";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private equipmentService: EquipmentService,
              private typeService: TypeService) {}
  equipments!: Observable<Array<EquipmentModel>>;
  types!: Observable<Array<TypeModel>>;
  ngOnInit(): void {
    this.getEquipments();
    this.types=this.typeService.getTypes();
    this.equipmentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      pricePerDay: [0, [Validators.required, Validators.min(0)]],
      typeId: [0, [Validators.required, Validators.min(1)]],
    });
  }

  getEquipments(): void {
    this.equipments = this.equipmentService.getEquipment();
  }

  deleteEquipment(equipment: EquipmentModel) {
      this.equipmentService.deleteEquipment(equipment).subscribe(
        () => this.getEquipments()
      )
  }

  updateEquipment(equipment: EquipmentModel) {
      this.equipmentService.updateEquipment(equipment).subscribe(
        () => this.getEquipments()
      )
  }

  saveEquipment() {
    const equipmentModel: EquipmentModelDto = {
      name: this.equipmentForm.value.name,
      pricePerDay: this.equipmentForm.value.pricePerDay,
      typeId: parseInt(this.equipmentForm.value.typeId)
    };
    this.equipmentForm.reset();
    console.log(equipmentModel);
    this.equipmentService.saveEquipment(equipmentModel).subscribe({
      next: (data) => {
        this.getEquipments();
        console.log(data)
      },
      error: (err) => console.log(err)
    })
  }
}
