import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() props: {
    auth: boolean;
    text: string;
    type: string;
    fade: boolean;
    isSidebar: boolean;
    isDetailsButton: boolean;
  };
  @Output() eventEmitter = new EventEmitter<void>();

  getClass(): string {
    let className: string = "button";

    if (this.props.auth) {
      className += " auth__button";
    }

    if (this.props.fade) {
      className += " auth__button--fade";
    }

    if (this.props.isSidebar) {
      className += " sidebar__new-submit";
    }

    if (this.props.isDetailsButton) {
      className += " details__button";
    }
    return className;
  }

  buttonClickHandler() {
    this.eventEmitter.emit();
  }

  getText(): string {
    return this.props.text || "Кнопка";
  }

  getType(): string {
    return this.props.type || "submit";
  }

  ngOnInit() {}
}
