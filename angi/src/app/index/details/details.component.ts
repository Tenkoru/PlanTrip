import { FormGroup } from "@angular/forms";
import { Trip } from "./../../app.trip";
import { DatabaseService } from "src/app/database/database.service";
import { UserService } from "./../../user/user.service";
import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Place } from "./app.place";

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
    this.getTrips();
  }
  starClickHandler($event: number) {
    this.trip.rating = $event;
  }
  deleteButtonHandler() {
    this.trip.type = "deleted";
    this.sendTripsData();
  }
  updateTripData(newData: any): void {
    // this.trip.date = newData.date;
    this.trip.title = newData.title;
    this.trip.description = newData.description;
  }
  updatePlaceHandler(updatedPlaces: Place[]) {
    this.trip.places = updatedPlaces;
    this.updatePlaceData();
  }
  saveButtonHandler(formData: FormGroup) {
    this.updateTripData(formData.value);
    this.sendTripsData();
  }
  updatePlaceData() {
    this.userService.getCurrentUser().subscribe(user => {
      this.databaseService
        .updateTripsData(user.email, { trips: this.trips })
        .subscribe();
    });
  }
  sendTripsData() {
    this.userService.getCurrentUser().subscribe(user => {
      this.databaseService
        .updateTripsData(user.email, { trips: this.trips })
        .subscribe(() => {
          this.router.navigateByUrl("/dashboard");
        });
    });
  }
  getTrips(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.databaseService.getUserData(user.email).subscribe(userdata => {
        if (userdata.payload.data()) {
          this.trips = userdata.payload.data().trips;
          this.trip = this.trips.find(item => item.id === this.tripId);
        }
      });
    });
  }

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router,
    private databaseService: DatabaseService,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.initData();
  }
  ngOnChanges() {
    console.log(123);
  }
}
