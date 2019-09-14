import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  submitButtonProps = {
    auth: true,
    text: "Войти",
    type: "submit"
  };

  telProps = {
    auth: true,
    text: "Введите номер телефона или почту",
    required: true
  };

  passwordProps = {
    auth: true,
    text: "Введите пароль",
    required: true,
    password: true
  };

  links = [
    {
      text: "Зарегистрироваться",
      link: "register"
    },
    {
      text: "Забыли пароль?",
      link: "reset"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
