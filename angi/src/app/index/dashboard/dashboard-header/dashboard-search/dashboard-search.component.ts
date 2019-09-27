import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss']
})
export class DashboardSearchComponent implements OnInit {

  @Input() selectProps: FormGroup;

  buttonImage: string = "assets/icons/searchIcon.svg";

  filterSubscription: Subscription;

  constructor() { }


  ngOnInit() {
    this.filterSubscription = this.selectProps.valueChanges.subscribe(() => {}) 
  }
  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

}
