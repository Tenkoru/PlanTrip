import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-bottom',
  templateUrl: './sidebar-bottom.component.html',
  styleUrls: ['./sidebar-bottom.component.scss']
})
export class SidebarBottomComponent implements OnInit {

  links = [
    {
      text: "Выйти из аккаунта",
      link: "auth",
    },
    {
      text: "Сменить пароль",
      link: "auth",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
