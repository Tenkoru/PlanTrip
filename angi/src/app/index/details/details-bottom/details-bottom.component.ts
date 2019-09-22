import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-bottom',
  templateUrl: './details-bottom.component.html',
  styleUrls: ['./details-bottom.component.scss']
})
export class DetailsBottomComponent implements OnInit {

  detailsBottomTitle: string = "Подробный план моего путешествия:";

  constructor() { }

  ngOnInit() {
  }

}
