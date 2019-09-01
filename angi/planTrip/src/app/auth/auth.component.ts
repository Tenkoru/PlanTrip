import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  title: String = "Планировщик поездок";

  image = "./assets/icons/logo.svg";

  constructor() {}

  ngOnInit() {}
}
