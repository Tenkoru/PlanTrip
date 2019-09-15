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
    isCardEditLink: boolean;
    isGrid: boolean;
  };

  currentClasses: object;

  ngOnInit() {
    this.currentClasses = {
      "link": true,
      "sidebar__link": this.props.isSidebarLink,
      "card__edit": this.props.isCardEditLink,
      "grid": this.props.isGrid,
    };
  }
}
