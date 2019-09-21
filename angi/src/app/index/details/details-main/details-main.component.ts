import { DetailsService } from "./../details.service";
import { Component, OnInit, Input } from "@angular/core";
import { Trip } from "src/app/app.trip";

@Component({
  selector: "app-details-main",
  templateUrl: "./details-main.component.html",
  styleUrls: ["./details-main.component.scss"]
})
export class DetailsMainComponent implements OnInit {
  @Input() props: Trip;
  date: string = "";

  constructor(private detailsService: DetailsService) {}
  ngOnInit() {}
  ngOnChanges() {
    this.date = this.detailsService.getParsedDates(this.props.date);
  }
}
