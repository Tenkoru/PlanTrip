import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"]
})
export class LabelComponent implements OnInit {
  @Input() props: {
    auth: boolean;
    text: String;
    required: boolean;
    password: boolean;
  };

  getText() {
    return this.props.text || "";
  }

  getLabelClass() {
    return this.props.auth ? "label auth__label" : "label";
  }

  getInputClass() {
    let className: String = "input";

    if (this.props.auth) {
      className += " auth__input";
    }

    if (this.props.password) {
      className += " auth__input--password";
    }

    return className;
  }

  isRequred() {
    return this.props.required;
  }

  constructor() {}

  ngOnInit() {}
}
