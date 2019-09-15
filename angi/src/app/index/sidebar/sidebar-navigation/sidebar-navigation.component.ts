import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar-navigation",
  templateUrl: "./sidebar-navigation.component.html",
  styleUrls: ["./sidebar-navigation.component.scss"]
})
export class SidebarNavigationComponent implements OnInit {
  
  links = [
    {
      text: "Мои друзья",
      link: "friends",
      isSidebarLink: true,
    },
    {
      text: "Мои поездки",
      link: "dashboard",
      isSidebarLink: true,
    },
    {
      text: "Создать новую поездку",
      link: "new-trip",
      isSidebarLink: true,
    }
  ];

  constructor() {}

  ngOnInit() {}
}
