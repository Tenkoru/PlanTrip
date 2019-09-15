import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-grid",
  templateUrl: "./dashboard-grid.component.html",
  styleUrls: ["./dashboard-grid.component.scss"]
})
export class DashboardGridComponent implements OnInit {

  activeButton: string = "grid";
  iconColor: string = "#456462";
  iconActiveColor: string = "#ffffff";

  buttons: object[] = [
    {
      type: "grid",
      icon: "assets/icons/grid.svg",
    },
    {
      type: "list",
      icon: "assets/icons/list.svg",
    }
  ]

  changeTableDisplay(type: string): void {
    this.activeButton = type;
  }

  constructor() {}

  ngOnInit() {}
}
