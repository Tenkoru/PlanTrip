import { FilterArguments } from "./filterArguments";
import { Trip } from "src/app/app.trip";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DashboardFilterService {
  constructor() {}
  filterTrips(trips: Trip[], filterString: string): Trip[] {
    let filteredTrips: Trip[] = [];
    const regExp = new RegExp(filterString, 'i');
    trips.forEach(trip => {
      if (trip.title.match(regExp)) {
        filteredTrips.push(trip);
      } else {
        if (typeof trip.places !== "undefined") {
          trip.places.forEach(place => {
            if (typeof place.regions !== "undefined") {
              place.regions.forEach(region => {
                if (typeof region.locations !== "undefined") {
                  region.locations.forEach(location => {
                    if (location.name.match(regExp)) {
                      filteredTrips.push(trip);
                    }
                  });
                }
              });
            }
          });
        }
      }
    });
    return filteredTrips;
  }
  filterAndSortTrips(trips: Trip[], filterArguments: FilterArguments): Trip[] {
    let filteredTrips: Trip[] = [];
    if (filterArguments.searchFilterString.length >= 3) {
      filteredTrips = this.filterTrips(
        trips,
        filterArguments.searchFilterString
      );
    } else {
      filteredTrips = trips;
    }

    return filteredTrips;
  }
}
