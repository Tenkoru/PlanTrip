import { Trip } from "./../../app.trip";
import { DatabaseService } from "src/app/database/database.service";
import { UserService } from "./../../user/user.service";
import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  trip: Trip;
  trips: Trip[];
  tripId: number = +this.route.snapshot.paramMap.get("id");
  initData(): void {
    this.dashboardService.getUserData().subscribe(user => {
      this.getTrips();
      // this.trip = user.trips.find(item => item.id === this.tripId);
    });
  }
  updateUserRating(): void {
    this.dashboardService.updateUserData;
  }
  starClickEvent($event: number) {
    this.trip.rating = $event;
  }
  deleteButtonHandler() {
    this.trip.type = "deleted";
  }
  saveButtonHandler() {
    this.sendTripsData();
  }
  sendTripsData() {
    this.userService.getCurrentUser().subscribe(user => {
      this.databaseService.updateTripsData(user.email, {trips: this.trips});
    });
  }
  getTrips(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.databaseService.getUserData(user.email).subscribe(userdata => {
        if (userdata.payload.data()) {
          this.trips = userdata.payload
            .data()
            .trips;
          this.trip = this.trips.find(item => item.id === this.tripId);
        }
      });
    });
  }

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.initData();
  }
}
