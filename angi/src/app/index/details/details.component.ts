import { DetailsService } from './details.service';
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
  routerSubscription = this.router.events;
  initData(): void {
    this.getTrips();
  }
  starClickHandler($event: number) {
    this.trip.rating = $event;
  }
  deleteButtonHandler() {
    this.trip.type = "deleted";
    this.detailsService.sendTripsData(this.trips, this.router);
  }
  updateTripData(newData: any): void {
    // this.trip.date = newData.date;
    this.trip.title = newData.title;
    this.trip.description = newData.description;
  }
  updatePlaceHandler(updatedPlaces: Place[]) {
    this.trip.places = updatedPlaces;
    this.detailsService.updatePlaceData(this.trips);
  }
  saveButtonHandler(formData: FormGroup) {
    this.updateTripData(formData.value);
    this.detailsService.sendTripsData(this.trips, this.router);
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
    private route: ActivatedRoute,
    private router: Router,
    private databaseService: DatabaseService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private detailsService: DetailsService,
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.tripId = +routeParams.id;
    });
    this.initData();
  }
}
