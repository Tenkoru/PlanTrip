import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-search',
  templateUrl: './details-search.component.html',
  styleUrls: ['./details-search.component.scss']
})
export class DetailsSearchComponent implements OnInit {
  
  searchButtonImage: string = "assets/icons/searchIcon.svg";
  addButtonImage: string = "assets/icons/plus.svg";

  addButtonColor: string = "#019287";
  addButtonHoverColor: string = "#ffffff";
  isHovered: boolean = false;

  mouseenterListener() {
    this.isHovered = true;
  }
  mouseleaveListener() {
    this.isHovered = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
