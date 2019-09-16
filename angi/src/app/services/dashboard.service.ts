import { Injectable } from "@angular/core";
import { Trip } from "../interfaces/trip";
import { TRIPS } from "../data/data";
import { Subject } from 'rxjs';

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

  gridDisplayChange: Subject<boolean> = new Subject<boolean>();

  setGridDisplay(value: boolean) {
    this.gridDisplayChange.next(value);
  }

  getTrips(): Trip[] {
    return TRIPS;
  }
  getStatuses() {
    this.setStatusesStatus();
    return this.statuses;
  }
  getGridStatus(): boolean {
    return this.isGrid;
  }
  setStatusesStatus(): void {
    const statuses = this.statuses;
    TRIPS.forEach(function(item) {
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
      }
    });
    this.statuses = statuses;
  }

  constructor() {
    this.gridDisplayChange.subscribe((value) => {
      this.isGrid = value;
    });
  }
}
