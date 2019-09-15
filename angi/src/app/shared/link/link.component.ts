import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"]
})
export class LinkComponent implements OnInit {
  constructor() {}

  @Input() props: {
    text: string;
    link: string;
    isSidebarLink: boolean;
  };

  getClass() {
    let className: string = "link";

    if (this.props.isSidebarLink) {
      className += " sidebar__link";
    }
    return className;
  }

  ngOnInit() {}
}
