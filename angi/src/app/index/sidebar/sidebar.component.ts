import { SidebarService } from "./../sidebar.service";
import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  backArrowProps = {
    className: "sidebar__arrow",
    link: "javascript:void(0)",
    isButton: true
  };
  userName: string;
  closeButtonImg: string = "assets/icons/closeIcon.svg";

  isNavHidden: boolean = false;
  isNewHidden: boolean = true;

  userAvatar: string = "assets/icons/profile.svg";

  closeSidebar() {
    this.sidebarService.setSidebarStatus(false);
  }
  openCreateNewMenu() {
    this.isNavHidden = true;
    this.isNewHidden = false;
  }
  getUserName() {
    this.dashboardService.getUserData().subscribe(user => {
      this.userName = user.name;
    });
  }
  getUserAvatar() {
    this.dashboardService.getUserData().subscribe(user => {
      this.userAvatar = user.avatar ? user.avatar : this.userAvatar;
    });
  }

  constructor(
    private sidebarService: SidebarService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.getUserName();
    this.getUserAvatar();
  }
}
