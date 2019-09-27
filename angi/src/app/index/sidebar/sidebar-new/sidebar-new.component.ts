import { SidebarService } from './../../sidebar.service';
import { Router } from "@angular/router";
import { UserService } from "./../../../user/user.service";
import { DatabaseService } from "src/app/database/database.service";
import { Trip } from "src/app/app.trip";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar-new",
  templateUrl: "./sidebar-new.component.html",
  styleUrls: ["./sidebar-new.component.scss"]
})
export class SidebarNewComponent implements OnInit {
  title: string = "Создать новую поездку";

  submitButtonText = "Добавить";
  nameText = "Введите название";
  dateStartText = "Начало";
  dateEndText = "Конец";
  textareaText = "Описание";
  newTripForm: FormGroup;

  initData() {
    this.newTripForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      dateStart: ["", [Validators.required]],
      dateEnd: [""],
      description: [""]
    });
  }
  submitHandler() {
    if (this.newTripForm.status === "VALID") {
      this.userService.getCurrentUser().subscribe(user => {
        this.databaseService
          .createNewTrip(user.email, this.newTripForm)
          .subscribe(newTripId => {
            this.router.navigateByUrl(`index/details/${newTripId}`);
            this.sidebarService.setSidebarStatus(false);
          });
      });
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private databaseService: DatabaseService,
    private userService: UserService,
    private router: Router,
    private sidebarService: SidebarService,
  ) {}

  ngOnInit() {
    this.initData();
  }
}
