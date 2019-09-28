import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Trip } from './../../../app.trip';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-friendsTrips',
  templateUrl: './friendsTrips.component.html',
  styleUrls: ['./friendsTrips.component.scss']
})
export class FriendsTripsComponent implements OnInit {

  trips: Trip[];
  tripsId: string;
  listTitle: string = "Предстоящие поездки:";

  databaseSubscription: Subscription;

  getTrips(): void {
    this.databaseSubscription = this.databaseService.getUserData(this.tripsId).subscribe(userdata => {
      if (userdata.payload.data()) {
        this.trips = userdata.payload.data().trips;
      }
    });
  }

  constructor(private activatedRoute: ActivatedRoute,private databaseService: DatabaseService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.tripsId = routeParams.id;
      this.getTrips();
    });
  }
}
