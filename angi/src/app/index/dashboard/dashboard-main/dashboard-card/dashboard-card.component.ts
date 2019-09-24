import { DetailsService } from './../../../details/details.service';
import { Component, OnInit, Input } from "@angular/core";
import { Trip } from "src/app/app.trip";
import * as moment from "moment";

@Component({
  selector: "app-dashboard-card",
  templateUrl: "./dashboard-card.component.html",
  styleUrls: ["./dashboard-card.component.scss"]
})
export class DashboardCardComponent implements OnInit {
  @Input() props: Trip;
  @Input() isGrid: boolean;

  numbers: number[];
  star = {
    icon: "assets/icons/star.svg",
    color: "#02332f",
    filledColor: "#019287"
  };
  linkProps = {
    text: "",
    link: "",
    isCardEditLink: true,
    isGrid: false
  };
  mainImg = "assets/images/tripDefault.jpg";
  dates: string = "";
  getLinkProps(): void {
    this.linkProps.text =
      this.props.type === "deleted" ? "Восстановить" : "Редактировать";
  }

  constructor(private detailsService: DetailsService) {
    this.numbers = Array(5)
      .fill(0)
      .map((x, i) => i + 1);
  }

  setLinkPath() {
    this.linkProps.link = `../details/${this.props.id}`;
  }
  formatDates() {
    this.dates = this.detailsService.getParsedDates(this.props.date);
  }
  setNewImage() {
    if (this.props.mainImg) {
      this.mainImg = this.props.mainImg;
    }
  }

  ngOnInit() {
    this.getLinkProps();
    this.formatDates();
    this.linkProps.isGrid = this.isGrid;
    this.setLinkPath();
    this.setNewImage();
  }
}
