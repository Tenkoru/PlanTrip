import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-burger',
  templateUrl: './header-burger.component.html',
  styleUrls: ['./header-burger.component.scss']
})
export class HeaderBurgerComponent implements OnInit {

  image = "./assets/icons/menu.svg";
  iconColor = "#3C9891";

  constructor() { }

  ngOnInit() {
  }

}
