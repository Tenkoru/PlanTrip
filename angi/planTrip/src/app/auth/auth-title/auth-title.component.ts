import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-auth-title",
  templateUrl: "./auth-title.component.html",
  styleUrls: ["./auth-title.component.css"]
})
export class AuthTitleComponent implements OnInit {
  @Input() props: {
    className: String;
    text: String;
  };

  getClass() {
    let className = "auth__title ";

    if (this.props.className) {
      className += this.props.className;
    }

    return className;
  }

  constructor() {}

  ngOnInit() {}
}