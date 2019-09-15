import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() props: {
    auth: boolean;
    text: String;
    type: String;
    fade: boolean;
    isSidebar: boolean;
  };

  getClass() {
    let className = "button";

    if (this.props.auth) {
      className += " auth__button";
    }

    if (this.props.fade) {
      className += " auth__button--fade";
    }

    if (this.props.isSidebar) {
      className += " sidebar__new-submit";
    }
    return className;
  }

  getText() {
    return this.props.text || "Кнопка";
  }

  getType() {
    return this.props.type || "submit";
  }

  ngOnInit() {}
}
