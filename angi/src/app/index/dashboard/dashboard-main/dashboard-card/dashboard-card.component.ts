import { Component, OnInit, Input } from "@angular/core";
import { Trip } from "src/app/interfaces/trip";
import * as moment from "moment";

@Component({
  selector: "app-dashboard-card",
  templateUrl: "./dashboard-card.component.html",
  styleUrls: ["./dashboard-card.component.scss"]
})
export class DashboardCardComponent implements OnInit {
  @Input() props: Trip;

  numbers: number[];
  star = {
    icon: "assets/icons/star.svg",
    color: "#02332f",
    filledColor: "#019287"
  };
  linkProps = {
    text: "",
    link: "",
    isCardEditLink: true
  };
  dates: string[];
  getLinkProps(): void {
    this.linkProps.text =
      this.props.type === "deleted" ? "Восстановить" : "Редактировать";
  }

  constructor() {
    this.numbers = Array(5)
      .fill(0)
      .map((x, i) => i + 1);
  }

  ngOnInit() {
    this.getLinkProps();
    this.dates = [
      moment.unix(this.props.date[0]).format("DD/MMM/YYYY"),
      moment.unix(this.props.date[1]).format("DD/MMM/YYYY")
    ];
  }
}
