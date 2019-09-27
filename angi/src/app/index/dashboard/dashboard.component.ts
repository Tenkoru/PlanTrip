import { FilterArguments } from './filterArguments';
import { DashboardFilterService } from './dashboardFilter.service';
import { DatabaseService } from './../../database/database.service';
import { UserService } from './../../user/user.service';
import { Trip } from 'src/app/app.trip';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  trips: Trip[];
  tripsSubscription: Subscription;
  filterArguments: FilterArguments = {
    searchFilterString: "",
    sortType: "name",
    sortDirectionAscending: true,
  }
  userServiceSubscription: Subscription;
  databaseSubscription: Subscription;
  
  filterChangeHandler($event): void {
    this.filterArguments.searchFilterString = $event.search.search;
    this.getTrips();
  }

  getTrips(): void {
    this.userServiceSubscription = this.userService.getCurrentUser().subscribe(user => {
      this.databaseSubscription = this.databaseService.getUserData(user.email).subscribe(userdata => {
        if (userdata.payload.data()) {
          let trips = userdata.payload.data().trips;
          this.trips = this.dashboardFilterService.filterAndSortTrips(trips, this.filterArguments);
        }
      });
    });
  }
  constructor(private userService: UserService, private databaseService: DatabaseService, private dashboardFilterService: DashboardFilterService) { }

  ngOnInit() {
    this.getTrips();
  }
  ngOnDestroy() {
    this.filterArguments.searchFilterString = "";
    this.databaseSubscription.unsubscribe();
    this.userServiceSubscription.unsubscribe();
  }
}
