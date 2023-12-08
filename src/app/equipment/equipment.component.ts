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
  selectedFile: File | null = null;

  ngOnInit(): void {
    this.getEquipments();
    this.types=this.typeService.getTypes();
    this.equipmentForm = this.formBuilder.group({
      img: ['', [Validators.required]],
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
    const formData = new FormData();
/*
    formData.append('img', this.equipmentForm.get('img')?.value);
*/
    if (this.selectedFile) {
      formData.append('img', this.selectedFile);
    }
    formData.append('name', this.equipmentForm.value.name);
    formData.append('pricePerDay', this.equipmentForm.value.pricePerDay);
    formData.append('typeId', this.equipmentForm.value.typeId);

    this.equipmentService.saveEquipment(formData).subscribe({
      next: (data) => {
        this.getEquipments();
        console.log(data);
      },
      error: (err) => console.log(err)
    });

    this.equipmentForm.reset();
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];

  }

}
