import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-social',
  templateUrl: './login-social.component.html',
  styleUrls: ['./login-social.component.css']
})
export class LoginSocialComponent implements OnInit {

  socials = [
    {
      name: "Vkontakte",
      link: "",
      className: "vk"
    },
    {
      name: "Facebook",
      link: "",
      className: "fb"
    },
    {
      name: "Google+",
      link: "",
      className: "g"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
