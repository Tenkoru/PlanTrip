import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss']
})
export class DashboardSearchComponent implements OnInit {

  @Input() searchProps: FormGroup;

  buttonImage: string = "assets/icons/searchIcon.svg";
  iconColor: "#456462";

  filterSubscription: Subscription;

  constructor() { }


  ngOnInit() {
  }

}
