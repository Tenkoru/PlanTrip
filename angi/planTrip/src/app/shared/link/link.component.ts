import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.css"]
})
export class LinkComponent implements OnInit {
  constructor() {}

  @Input() props: {
    text: String;
  };

  ngOnInit() {}
}
