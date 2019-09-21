import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";
import { Trip } from "src/app/app.trip";

@Component({
  selector: "app-dashboard-main",
  templateUrl: "./dashboard-main.component.html",
  styleUrls: ["./dashboard-main.component.scss"]
})
export class DashboardMainComponent implements OnInit {
  trips: Trip[];
  statuses = {
    isFuture: false,
    isPast: false,
    isDeleted: false
  };
  isGrid: boolean;
  futureListTitle: string = "Предстоящие поездки:";
  pastListTitle: string = "Прошедшие поездки:";
  deletedListTitle: string = "Удаленные поездки:";

  constructor(private dashboardService: DashboardService) {
    this.isGrid = dashboardService.isGrid;
  }

  getTrips(): void {
    this.dashboardService.getUserData().subscribe(user => {
      this.trips = user.trips;
    });
  }
  setGridStatus(): void {
    this.dashboardService.gridDisplayChange.subscribe(value => {
      this.isGrid = value;
    });
  }
  getStatuses(): void {
    this.dashboardService.statusesChange.subscribe(value => {
      this.statuses = value;
    })
  }

  ngOnInit() {
    this.setGridStatus();
    this.getTrips();
    this.getStatuses();
  }
}
