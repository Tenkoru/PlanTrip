import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss']
})
export class DashboardSearchComponent implements OnInit {

  buttonImage = "assets/icons/searchIcon.svg";

  constructor() { }

  ngOnInit() {
  }

}
