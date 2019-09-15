import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.scss']
})
export class DashboardFilterComponent implements OnInit {

  buttonImage: String = "assets/icons/dropdownArrow.svg";
  sortArrowImg: String = "assets/icons/backArrow.svg";
  isArrowUp: boolean = true;
  filterOptions: object[] = [
    {
      text: "Сортировать по дате",
      value: "date",
    },
    {
      text: "Сортировать по рейтингу",
      value: "stars",
    },
  ];
  
  ButtonclickListener() {
    this.isArrowUp = !this.isArrowUp;
  }

  constructor() { }

  ngOnInit() {
  }

}
