import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class DetailsService {
  constructor() {}
  getParsedDates(dates: number[]): string {
    if (dates) {
      let date1 = dates[0];
      let date2 = dates[1];
      let result: string = "";

      if (date1 && date2 && date1 > date2) {
        const tmp = date1;
        date1 = date2;
        date2 = tmp;
      }

      if (date1) {
        result = moment.unix(date1).format("DD/MMM/YYYY");
      }

      if (date2) {
        result += ` - ${moment.unix(date2).format("DD/MMM/YYYY")}`;
      }
      return result;
    } else {
      return "Дата";
    }
  }
  parseDatesToTimestamp(): number[] {
    return new Array();
  }
}
