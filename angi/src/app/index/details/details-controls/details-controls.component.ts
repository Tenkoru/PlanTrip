import { Trip } from 'src/app/app.trip';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-details-controls",
  templateUrl: "./details-controls.component.html",
  styleUrls: ["./details-controls.component.scss"]
})
export class DetailsControlsComponent implements OnInit {
  @Input() rating: number = 0;
  @Output() starClickEmitter = new EventEmitter<number>();

  star = {
    icon: "assets/icons/star.svg",
    color: "#02332f",
    filledColor: "#019287",
    size: 30,
  };
  numbers: number[];
  
  starClickHandler(id: number) {
    this.starClickEmitter.emit(id + 1);
  }

  constructor() {
    this.numbers = Array(5)
      .fill(0)
      .map((x, i) => i + 1);
  }

  ngOnInit() {}
}
