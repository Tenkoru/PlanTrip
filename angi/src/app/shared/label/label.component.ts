import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"]
})
export class LabelComponent implements OnInit {
  @Input() props: {
    auth: boolean;
    text: string;
    required: boolean;
    password: boolean;
  };

  getText(): string {
    return this.props.text || "";
  }

  getLabelClass(): string {
    return this.props.auth ? "label auth__label" : "label";
  }

  getInputClass(): string {
    let className: string = "input";

    if (this.props.auth) {
      className += " auth__input";
    }

    if (this.props.password) {
      className += " auth__input--password";
    }

    return className;
  }

  isRequred(): boolean {
    return this.props.required;
  }

  constructor() {}

  ngOnInit() {}
}
