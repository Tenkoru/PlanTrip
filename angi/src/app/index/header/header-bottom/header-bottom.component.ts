import { ActivatedRoute, RouterState, Router, NavigationEnd } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-bottom",
  templateUrl: "./header-bottom.component.html",
  styleUrls: ["./header-bottom.component.scss"]
})
export class HeaderBottomComponent implements OnInit {
  title: string = "Список поездок";
  titles = {
    dashboard: "Список поездок",
    details: "Информация о поездке",
    friends: "Друзья",
  }
  isArrowShown = true;
  arrowProps = {
    link: "/dashboard",
    className: "headerArrow",
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setTitleByUrl(event.urlAfterRedirects);
      }
    });
  }
  setTitleByUrl(url: string) {
    this.isArrowShown = true;
    if (url.match("dashboard")) {
      this.isArrowShown = false;
      this.title = this.titles.dashboard;
    } else if (url.match("details")) {
      this.title = this.titles.details;
    } else if (url.match("friends")) {
      this.title = this.titles.friends;
    }
  }

  ngOnInit() {
  }
}
