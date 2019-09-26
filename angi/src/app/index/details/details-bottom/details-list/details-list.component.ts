import { DetailsService } from './../../details.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Place } from "../../app.place";

@Component({
  selector: "app-details-list",
  templateUrl: "./details-list.component.html",
  styleUrls: ["./details-list.component.scss"]
})
export class DetailsListComponent implements OnInit {
  @Input() list: Place[];
  @Output() deleteEmitter = new EventEmitter;

  dropdownIconImg = "assets/icons/down-chevron.svg";
  editIconImage = "assets/icons/closeIcon.svg";
  dropdownIconColor = "#10645D";
  editIconsColor = "#10645D";

  dropdownIconBigSize = 38;
  dropdownIconMediumSize = 28;
  dropdownIconSmallSize = 18;

  dropdownButtonClickListener(place: any) {
    if (typeof place.hidden === "undefined") {
      place.hidden = true;
    } else {
      place.hidden = !place.hidden;
    }
  }

  destinationDeleteHandler(place: object) {
    let updatedList = this.detailsService.deletePlaceFromList(this.list, place);
    this.deleteEmitter.emit(updatedList);
  }

  getDate(dates: number[]): string {
    return this.detailsService.getParsedDates(dates);
  }

  constructor(private detailsService: DetailsService) {}

  ngOnInit() {}
}
