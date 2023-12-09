import {Component, OnInit, Type} from '@angular/core';
import { DemandService } from '../services/demand/demand.service';
import { Observable } from 'rxjs';
import { Demand } from '../Model/demand.model';
import { EquipmentDemand } from '../Model/equipmentDemand.model';
import { EquipmentService } from '../services/equipment/equipment.service';
import { EquipmentModel } from '../Model/equipment.model';
import { EquipmentDemandDto } from '../dto/EquipmentDemandDto';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css'],
})
export class DemandComponent implements OnInit {
  reservationToEquipments!: number
  startDate!: Date;
  endDate!: Date;
  demands$!: Observable<Demand[]>;
  selectedDemand$!: Observable<EquipmentDemand[]>;
  equipments$!: Observable<EquipmentModel[]>;
  constructor(private demandService: DemandService,private equipmentService:EquipmentService) {
  }
  ngOnInit(): void {
    this.demands$ = this.demandService.getDemands();
    this.demands$.subscribe();
  }
  getEquipmentDemand(id: number): void {    
    this.selectedDemand$=this.demandService.getEquipmentDemand(id);
    this.selectedDemand$.subscribe((data)=>{
      console.log(data);
      });
  }
  getAllEquipments():void{
    this.equipments$ = this.equipmentService.getEquipment();
    this.equipments$.subscribe((
      data)=>{
        // console.log(data);
      }
    );
  }
  saveReservation(element:NgForm):void{
    if(this.startDate!=undefined && this.endDate!=undefined && this.reservationToEquipments!=undefined){     
      let demand:EquipmentDemandDto=new EquipmentDemandDto(this.startDate,this.endDate,this.reservationToEquipments);
      this.demandService.save(demand).subscribe((data)=>{
        this.ngOnInit();
        element.reset();
        document.getElementById('close-modal-btn')?.click();
      },(error)=>{
        console.log(error.error);
        });
    }   
  }
}
