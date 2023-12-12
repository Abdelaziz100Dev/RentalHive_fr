import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstDemo';
  actions: Array<any>=[
    {"title":"types","route":"/types",icon: "tags"},
    {"title":"equipments","route":"/equipments",icon: "plus-circle"},
    {"title":"demands","route":"/demands",icon: "plus-circle"}
  ];

  currentAction: any;
  setCurrentAction(action: any){
    this.currentAction = action;
  }
}
