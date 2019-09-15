import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar-new",
  templateUrl: "./sidebar-new.component.html",
  styleUrls: ["./sidebar-new.component.scss"]
})
export class SidebarNewComponent implements OnInit {
  title: String = "Создать новую поездку";

  submitButtonProps = {
    text: "Добавить",
    type: "submit",
    isSidebar: true,
  };

  nameProps = {
    text: "Введите название",
    required: true
  };

  dateStartProps = {
    text: "Начало",
    required: true,
  };

  dateEndProps = {
    text: "Конец",
    required: true,
  };

  textareaProps = {
    text: "Описание",
    isSidebar: true,
  };

  constructor() {}

  ngOnInit() {}
}
