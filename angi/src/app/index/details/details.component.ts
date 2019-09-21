import { Component, OnInit } from "@angular/core";
import { Trip } from 'src/app/app.trip';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  trip: Trip;
  getTrip(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.dashboardService.getUserData().subscribe(user => {
      this.trip = user.trips.find(item => item.id === id);
    });
  }

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getTrip();
  }
}
