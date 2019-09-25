import { UserService } from "./../../../user/user.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";
import { Trip } from "src/app/app.trip";
import { DatabaseService } from "src/app/database/database.service";
import { Subscription } from 'rxjs';

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
  tripsSubscription: Subscription;

  constructor(
    private dashboardService: DashboardService,
    private databaseService: DatabaseService,
    private userService: UserService
  ) {
    this.isGrid = dashboardService.isGrid;
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    if (
      window.matchMedia("(max-width: 640px)").matches &&
      this.isGrid === true
    ) {
      this.dashboardService.setGridStatus(false);
    }
  }

  getTrips(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.tripsSubscription = this.databaseService.getUserData(user.email).subscribe(userdata => {
        if (userdata.payload.data()) {
          this.trips = userdata.payload.data().trips;
        }
      });
    });
  }
  getGridStatus(): void {
    this.dashboardService.gridDisplayChange.subscribe(value => {
      this.isGrid = value;
    });
  }

  getTripStatus(): void {
    this.dashboardService.getTripsStatus();
  }

  ngOnInit() {
    this.getGridStatus();
    this.getTrips();
    this.getTripStatus();
    this.dashboardService.tripsStatusesChange.subscribe(value => {
      this.statuses = value;
    })
  }
  ngOnDestroy() {
    this.tripsSubscription.unsubscribe();
  }
}
