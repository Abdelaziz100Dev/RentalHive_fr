import {ChangeDetectorRef, Component} from '@angular/core';
import {DevisService} from "../../services/devis/devis.service";
import {HttpClient} from "@angular/common/http";
import {DemandModel} from "../../Model/demand.model";
import {DevisModel} from "../../Model/devis.model";
import {DemandService} from "../../services/demand/demand.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../../Model/User.model";
// import * as console from "console";

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {
  devisForm!: FormGroup;
  devis$!:Array<DevisModel>;
  userWithDemand:DemandModel[]= [];
  throwValues: DevisModel | undefined;


  constructor(private devisService :DevisService,
              private DemandService :DemandService,
              private formBuilder: FormBuilder,
              private cdr: ChangeDetectorRef,
              private http :HttpClient) {
  }
  public ngOnInit() {
    this.getDemandByUser();
    this.getDemands();
    this.devisForm = this.formBuilder.group({
      id: [null],
      date: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0),Validators.max(10)]],
      demandUserName: [ [Validators.required]],
    });
  }

  public getDemandByUser(){
    this.DemandService.getDemandByUser().subscribe(
      data=>{
        console.log(data)
        this.userWithDemand=data;
      })
  }
  handleCheck(devis: any) {
    this.devisService.toggleDevisStatus(devis).subscribe(
      () => this.getDemands()
    )
  }
  public getDemands(){
    this.devisService.getAll().subscribe(
      data=>{
        this.devis$=data;
      })
  }
  deleteDevis(devis: DevisModel) {
    // this.demandService.deleteDemand(demand);
    this.devisService.deleteDevis(devis).subscribe(
      () => this.getDemands()
    )
  }

  updateDevis(devis: DevisModel) {
    this.devisForm.patchValue({
      id: devis.id,
      date: devis.date,
      price: devis.price,
      demandUserName: devis.demand_id
    });

    console.log({devis});
   [ this.throwValues] = this.devis$.filter((value) => value.id === devis.id);
    console.log(this.throwValues);
    this.cdr.detectChanges();
    // this.devisService.updateDevis(devis);
  }

  saveDevis() {
    const formData = new FormData();

    formData.append('date', this.devisForm.value.date);
    formData.append('price', this.devisForm.value.price);
    formData.append('demandUserName', this.devisForm.value.demandUserName);

    // Convert form values to JSON
    console.log(JSON.stringify(this.devisForm.value));
    const formJson = {
        date: this.devisForm.value.date,
        price: this.devisForm.value.price,
        demand_id: this.devisForm.value.demandUserName,

    };

    this.devisService.saveDevis(formJson).subscribe({
      next: (data) => {
        this.getDemands();
        console.log(data);
      },
      error: (err) => console.log(err)
    });

    this.devisForm.reset();

  }

  protected readonly console = console;
}
