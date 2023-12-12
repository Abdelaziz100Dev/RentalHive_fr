import {Component, OnInit} from '@angular/core';
import {DemandService} from "../../services/demand/demand.service";
import {DemandModel} from "../../Model/demand.model";

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent  implements OnInit{
    demands!:Array<any>;

  constructor(private demandService :DemandService) {
  }
  public ngOnInit() {

    this.getDemands();
  }

  handleCheck(product: any) {

  }
  public getDemands(){
    this.demandService.getAll().subscribe(
      data=>{
        this.demands=data;
      })
  }
  deleteDemand(demand: DemandModel) {
    // this.demandService.deleteDemand(demand);
    this.demandService.deleteDemand(demand).subscribe(
      () => this.getDemands()
    )
  }
}
