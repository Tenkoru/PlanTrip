import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
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
  ];

  logoutClickHandler() {
    this.authService.doLogout().subscribe(() => {
      this.router.navigateByUrl('/auth');
    })
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
