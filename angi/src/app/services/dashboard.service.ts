import { Injectable } from "@angular/core";
import { Trip } from "../interfaces/trip";
import { TRIPS } from "../data/data";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  statuses = {
    isFuture: false,
    isPast: false,
    isDeleted: false
  };

  getTrips(): Trip[] {
    return TRIPS;
  }
  getStatuses() {
    this.setStatusesStatus();
    return this.statuses;
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

  constructor() {}
}
