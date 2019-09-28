import { Validators } from "@angular/forms";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-friendsSearch",
  templateUrl: "./friendsSearch.component.html",
  styleUrls: ["./friendsSearch.component.scss"]
})
export class FriendsSearchComponent implements OnInit {
  requestForm: FormGroup;
  buttonImage = "assets/icons/plus.svg";
  iconColor = "#019287";
  iconHoverColor = "#ffffff";
  iconCurrentColor = this.iconColor;

  mousehover(): void {
    this.iconCurrentColor = this.iconHoverColor;
  }
  mouseleave(): void {
    this.iconCurrentColor = this.iconColor;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      input: ["", [Validators.required]]
    });
  }
}
