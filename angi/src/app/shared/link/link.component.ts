import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"]
})
export class LinkComponent implements OnInit {
  constructor() {}

  @Input() props: {
    text: String;
    link: String;
    isSidebarLink: boolean;
  };

  getClass() {
    let className = "link";

    if (this.props.isSidebarLink) {
      className += " sidebar__link";
    }
    return className;
  }

  ngOnInit() {}
}
