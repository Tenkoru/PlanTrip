import { DashboardService } from "src/app/services/dashboard.service";
import { FilterArguments } from "./filterArguments";
import { DashboardFilterService } from "./dashboardFilter.service";
import { DatabaseService } from "./../../database/database.service";
import { UserService } from "./../../user/user.service";
import { Trip } from "src/app/app.trip";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  trips: Trip[];
  tripsSubscription: Subscription;
  filterArguments: FilterArguments = {
    searchFilterString: "",
    sortType: "name",
    sortDirectionAscending: true
  };
  statuses = {
    isFuture: false,
    isPast: false,
    isDeleted: false
  };
  userServiceSubscription: Subscription;
  databaseSubscription: Subscription;

  filterChangeHandler($event): void {
    this.filterArguments.searchFilterString = $event.search.search;
    this.getTrips();
  }

  getTrips(): void {
    this.userServiceSubscription = this.userService
      .getCurrentUser()
      .subscribe(user => {
        this.databaseSubscription = this.databaseService
          .getUserData(user.email)
          .subscribe(userdata => {
            if (userdata.payload.data()) {
              let trips = userdata.payload.data().trips;
              this.trips = this.dashboardFilterService.filterAndSortTrips(
                trips,
                this.filterArguments
              );
              this.dashboardService.setTripsStatus(this.trips);
            }
          });
      });
  }
  constructor(
    private userService: UserService,
    private databaseService: DatabaseService,
    private dashboardFilterService: DashboardFilterService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.getTrips();
    this.dashboardService.tripsStatusesChange.subscribe(value => {
      this.statuses = value;
    });
  }
  ngOnDestroy() {
    this.filterArguments.searchFilterString = "";
    this.databaseSubscription.unsubscribe();
    this.userServiceSubscription.unsubscribe();
  }
}
