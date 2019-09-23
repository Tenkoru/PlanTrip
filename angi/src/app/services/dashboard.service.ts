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
  isGrid: boolean = true;
  UserId: number = 1;
  private usersUrl = "api/USERS";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  gridDisplayChange: Subject<boolean> = new Subject<boolean>();
  statusesChange: Subject<any> = new Subject<any>();

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
  setStatusesStatus(): void {
    const statuses = {
      isFuture: false,
      isPast: false,
      isDeleted: false
    };
    this.getUserData().subscribe(user => {
      user.trips.forEach(function(item) {
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
      this.statusesChange.next(statuses);
    });
  }
  setGridDisplay(value: boolean): void {
    this.gridDisplayChange.next(value);
  }

  constructor(private http: HttpClient) {
    this.gridDisplayChange.subscribe(value => {
      this.isGrid = value;
    });
    this.statusesChange.subscribe(value => {
      this.statuses = value;
    });
    this.setStatusesStatus();
  }
}
