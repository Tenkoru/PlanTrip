import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-grid",
  templateUrl: "./dashboard-grid.component.html",
  styleUrls: ["./dashboard-grid.component.scss"]
})
export class DashboardGridComponent implements OnInit {

  activeButton: String = "grid";
  iconColor: String = "#456462";
  iconActiveColor: String = "#ffffff";

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

  changeTableDisplay(type: string) {
    this.activeButton = type;
  }

  constructor() {}

  ngOnInit() {}
}
