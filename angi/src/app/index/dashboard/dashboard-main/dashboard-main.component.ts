import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";
import { Trip } from "src/app/interfaces/trip";

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
  isGrid: boolean = true;
  futureListTitle: string = "Предстоящие поездки:";
  pastListTitle: string = "Прошедшие поездки:";
  deletedListTitle: string = "Удаленные поездки:";

  constructor(private dashboardService: DashboardService) {}

  getTrips(): void {
    this.statuses = this.dashboardService.getStatuses();
    this.trips = this.dashboardService.getTrips();
  }

  ngOnInit() {
    this.getTrips();
  }
}
