import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  backArrowProps = {
    className: "sidebar__arrow",
    link: "javascript:void(0)"
  };

  profileName: string = "Александр";
  userAvatar: string = "assets/icons/profile.svg";

  constructor() {}

  closeButtonImg: string = "assets/icons/closeIcon.svg";

  ngOnInit() {}
}
