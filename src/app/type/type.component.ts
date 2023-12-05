import {Component, OnInit} from '@angular/core';
import {TypeService} from "../services/type/type.service";
import {TypeModel} from "../Model/Type.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  types!: Observable<Array<TypeModel>>

  typeName: string = "";
  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes(): void {
    this.types=this.typeService.getTypes()
  }

  deleteType(typeModel: TypeModel): void {
    this.typeService.deleteTypes(typeModel).subscribe(
      () => this.getTypes()
    )
  }

  updateType(typeModel : TypeModel): void {
    this.typeService.updateType(typeModel);
  }

  saveType() {
    this.typeService.saveType(new TypeModel(1,this.typeName)).subscribe({
      next: (data) => {
        this.getTypes();
        console.log(data)
      },
      error: (err) => console.log(err)
    });

  }
}
