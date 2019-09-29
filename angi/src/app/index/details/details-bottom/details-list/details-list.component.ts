import { DateService } from "../../../../shared/services/date.service";
import { DetailsService } from "./../../details.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Place } from "../../app.place";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-details-list",
  templateUrl: "./details-list.component.html",
  styleUrls: ["./details-list.component.scss"]
})
export class DetailsListComponent implements OnInit {
  @Input() list: Place[];
  @Input() isNotEditable: boolean;
  @Output() deleteEmitter = new EventEmitter();

  dropdownIconImg = "assets/icons/down-chevron.svg";
  editIconImage = "assets/icons/closeIcon.svg";
  dropdownIconColor = "#10645D";
  editIconsColor = "#10645D";

  placeToDelete: object;

  dropdownIconBigSize = 38;
  dropdownIconMediumSize = 28;
  dropdownIconSmallSize = 18;

  modalAcceptProps = {
    text: "Да",
    type: "button",
    isFullWidth: true
  };

  modalDeclineProps = {
    text: "Нет",
    type: "button",
    isFullWidth: true,
    isModalDecline: true
  };

  dropdownButtonClickListener(place: any) {
    if (typeof place.hidden === "undefined") {
      place.hidden = true;
    } else {
      place.hidden = !place.hidden;
    }
  }

  destinationDeleteHandler(confirmDeletion: any, place: object) {
    this.placeToDelete = place;
    this.open(confirmDeletion);
  }

  emitPlaceToDelete(): void {
    let updatedList = this.detailsService.deletePlaceFromList(this.list, this.placeToDelete);
    this.deleteEmitter.emit(updatedList);
  }

  modalOptions = {
    centered: true,
    windowClass: "modalDelete"
  };

  open(confirmDeletion: any) {
    this.modalService.open(confirmDeletion, this.modalOptions).result.then(
      result => {
        if (result === "accept") {
          this.emitPlaceToDelete();
        }
      },
      reason => {}
    );
  }

  getDate(dates: number[]): string {
    return this.dateService.getParsedDates(dates);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  constructor(
    private dateService: DateService,
    private detailsService: DetailsService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}
}
