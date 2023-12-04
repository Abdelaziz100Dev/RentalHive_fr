import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstDemo';
  actions: Array<any>=[
    {"title":"home","route":"/home",icon: "house"},
    {"title":"products","route":"/products",icon: "arrow-down-up"},
    {"title":"new products","route":"/new-products",icon: "plus-circle"},
  ];

  currentAction: any;
  setCurrentAction(action: any){
    this.currentAction = action;
  }
}
