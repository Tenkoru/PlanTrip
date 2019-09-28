import { FriendsService } from "./../friends/friends.service";
import { DetailsService } from "./details.service";
import { FormGroup } from "@angular/forms";
import { Trip } from "./../../app.trip";
import { DatabaseService } from "src/app/database/database.service";
import { UserService } from "./../../user/user.service";
import { Component, OnInit } from "@angular/core";
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
  friendEmail: string = "";
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
    if (this.friendEmail) {
      this.databaseService.getUserData(this.friendEmail).subscribe(userdata => {
        if (userdata.payload.data()) {
          this.trips = userdata.payload.data().trips;
          this.trip = this.trips.find(item => item.id === this.tripId);
        }
      });
    } else {
      this.userService.getCurrentUser().subscribe(user => {
        this.databaseService.getUserData(user.email).subscribe(userdata => {
          if (userdata.payload.data()) {
            this.trips = userdata.payload.data().trips;
            this.trip = this.trips.find(item => item.id === this.tripId);
          }
        });
      });
    }
  }
  checkRouterParams(): void {
    if (this.detailsService.isAtFriendDetails(this.route)) {
      this.route.params.subscribe(routeParams => {
        if (routeParams.id) {
          this.friendEmail = this.detailsService.getEmailFromRoute(this.route);
          this.friendsService.isFriend(this.friendEmail).subscribe((isFriend: boolean) => {
            if (isFriend) {
              this.trip = routeParams.id;
              this.getTrips();
            } else {
              this.router.navigate(["/index"]);
            }
          });
        } else {
          this.getTrips();
        }
      });
    } else {
      this.route.params.subscribe(routeParams => {
        this.trip = routeParams.id;
        this.getTrips();
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private databaseService: DatabaseService,
    private userService: UserService,
    private detailsService: DetailsService,
    private friendsService: FriendsService
  ) {}
  ngOnInit() {
    this.checkRouterParams();
  }
}
