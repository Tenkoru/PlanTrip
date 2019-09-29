import { UserService } from 'src/app/shared/user/user.service';
import { DatabaseService } from '../../shared/database/database.service';
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/authentication/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-social",
  templateUrl: "./login-social.component.html",
  styleUrls: ["./login-social.component.scss"]
})
export class LoginSocialComponent implements OnInit {
  socials = [
    {
      name: "Facebook",
      type: "button",
      className: "fb",
      image: "assets/icons/facebook.svg"
    },
    {
      name: "Google",
      type: "button",
      className: "g",
      image: "assets/icons/google-plus.svg"
    }
  ];
  socialNames = {
    facebook: "Facebook",
    google: "Google"
  };
  iconColor: string = "#435A59";



  socialLogin(socialName: string) {
    switch (socialName) {
      case this.socialNames.facebook: {
        this.authService.doFacebookLogin().subscribe(res => {
          this.databaseService.tryCreateNewUser(res);
          this.redirect();
        });
        break;
      }
      case this.socialNames.google: {
        this.authService.doGoogleLogin().subscribe(res => {
          this.databaseService.tryCreateNewUser(res);
          this.redirect();
        });
        break;
      }
      default: {
        console.warn("Undefined social name");
      }
    }
  }
  redirect(): void {
    let redirect = this.authService.redirectUrl
      ? this.router.parseUrl(this.authService.redirectUrl)
      : "/index/dashboard";

    this.router.navigateByUrl(redirect);
  }

  constructor(private authService: AuthService, public router: Router, private databaseService: DatabaseService) {}

  ngOnInit() {}
}
