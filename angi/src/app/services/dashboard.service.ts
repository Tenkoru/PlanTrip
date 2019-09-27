import { Injectable } from "@angular/core";
import { Trip } from "../app.trip";
import { Subject } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

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

  setTripsStatus(trips: Trip[]): void {
    const statuses = {
      isFuture: false,
      isPast: false,
      isDeleted: false
    };
    trips.forEach(function(item) {
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
    this.tripsStatusesChange.next(statuses);
  }

  constructor() {
    this.gridDisplayChange.subscribe(value => {
      this.isGrid = value;
    });
    this.tripsStatusesChange.subscribe(value => {
      this.statuses = value;
    });
  }
}
