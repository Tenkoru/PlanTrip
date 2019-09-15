import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-social",
  templateUrl: "./login-social.component.html",
  styleUrls: ["./login-social.component.scss"]
})
export class LoginSocialComponent implements OnInit {
  socials = [
    {
      name: "Vkontakte",
      link: "",
      className: "vk",
      image: "assets/icons/vk.svg"
    },
    {
      name: "Facebook",
      link: "",
      className: "fb",
      image: "assets/icons/facebook.svg"
    },
    {
      name: "Google+",
      link: "",
      className: "g",
      image: "assets/icons/google-plus.svg"
    }
  ];
  iconColor: string = "#435A59";

  constructor() {}

  ngOnInit() {}
}
