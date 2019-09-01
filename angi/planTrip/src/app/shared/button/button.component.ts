import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() props: {
    auth: boolean;
    text: String;
    type: String;
  };

  getClass() {
    return this.props.auth ? "button auth__button" : "button";
  }

  getText() {
    return this.props.text || "Кнопка";
  }

  getType() {
    return this.props.type || "submit";
  }

  ngOnInit() {}
}
