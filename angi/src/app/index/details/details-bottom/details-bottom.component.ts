import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/app.trip';

@Component({
  selector: 'app-details-bottom',
  templateUrl: './details-bottom.component.html',
  styleUrls: ['./details-bottom.component.scss']
})
export class DetailsBottomComponent implements OnInit {

  @Input() props: Trip;

  detailsBottomTitle: string = "Подробный план моего путешествия:";

  constructor() { }

  ngOnInit() {
  }

}
