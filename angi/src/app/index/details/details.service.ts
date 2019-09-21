import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class DetailsService {
  constructor() {}
  getParsedDates(dates: number[]) {
    let date1 = dates[0];
    let date2 = dates[1];

    if (date1 > date2) {
      const tmp = date1;
      date1 = date2;
      date2 = tmp;
    }

    return `${moment.unix(date1).format("DD/MMM/YYYY")} - ${moment
      .unix(date2)
      .format("DD/MMM/YYYY")}`;
  }
}
