import { User } from "./../../app.user";
import { Component, OnInit } from "@angular/core";
import { Trip } from "src/app/app.trip";
import { DashboardService } from "src/app/services/dashboard.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  trip: Trip;
  user: User;
  tripId: number = +this.route.snapshot.paramMap.get("id");
  initData(): void {
    this.dashboardService.getUserData().subscribe(user => {
      this.user = user;
      this.trip = user.trips.find(item => item.id === this.tripId);
    });
  }
  updateUserRating(): void {
    this.dashboardService.updateUserData;
  }
  starClickEvent($event: number) {
    this.trip.rating = $event;
    this.dashboardService.updateUserData(this.user).subscribe(() => {
      this.initData();
    })
  }

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.initData();
  }
}
