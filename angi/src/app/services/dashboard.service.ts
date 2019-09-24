import { UserService } from "./../user/user.service";
import { DatabaseService } from "./../database/database.service";
import { Injectable } from "@angular/core";
import { Trip } from "../app.trip";
import { Subject, Observable, of } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { User } from "../user/app.user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  statuses = {
    isFuture: false,
    isPast: false,
    isDeleted: false
  };
  isGrid = true;
  UserId: number = 1;
  private usersUrl = "api/USERS";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  gridDisplayChange: Subject<boolean> = new Subject<boolean>();
  tripsStatusesChange: Subject<any> = new Subject<any>();

  getGridStatus() {
    return this.isGrid;
  }

  setGridStatus(value: boolean) {
    this.gridDisplayChange.next(value);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getUserData() {
    const url = `${this.usersUrl}/${this.UserId}`;
    return this.http
      .get<User>(url)
      .pipe(catchError(this.handleError<User>(`getHero id=${this.UserId}`)));
  }
  updateUserData(user: User): Observable<any> {
    return this.http
      .put(this.usersUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError<any>(`updateUser`)));
  }
  getTripsStatus(): void {
    const statuses = {
      isFuture: false,
      isPast: false,
      isDeleted: false
    };
    this.userService.getCurrentUser().subscribe(user => {
      this.databaseService.getUserData(user.email).subscribe(userdata => {
        if (userdata.payload.data()) {
          userdata.payload.data().trips.forEach(function(item) {
            switch (item.type) {
              case "future": {
                statuses.isFuture = true;
                break;
              }
              case "past": {
                statuses.isPast = true;
                break;
              }
              case "deleted": {
                statuses.isDeleted = true;
                break;
              }
              default: {
                statuses.isDeleted = true;
                break;
              }
            }
          });
        }
        this.tripsStatusesChange.next(statuses);
      });
    });
  }

  constructor(
    private http: HttpClient,
    private databaseService: DatabaseService,
    private userService: UserService
  ) {
    this.gridDisplayChange.subscribe(value => {
      this.isGrid = value;
    });
    this.tripsStatusesChange.subscribe(value => {
      this.statuses = value;
    });
  }
}
