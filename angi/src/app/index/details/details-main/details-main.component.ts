import { DateService } from "../../../shared/services/date.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Trip } from "src/app/app.trip";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IDatePickerConfig } from "ng2-date-picker";

@Component({
  selector: "app-details-main",
  templateUrl: "./details-main.component.html",
  styleUrls: ["./details-main.component.scss"]
})
export class DetailsMainComponent implements OnInit {
  @Input() props: Trip;
  @Input() isNotEditable: boolean;
  @Output() starClickEmitter = new EventEmitter<number>();
  @Output() deleteButtonEmitter = new EventEmitter<any>();
  @Output() saveButtonEmitter = new EventEmitter<any>();

  dpConfig: IDatePickerConfig = {
    format: "DD/MM/YYYY",
  };
  isDash: boolean = false;

  star = {
    icon: "assets/icons/star.svg",
    color: "#02332f",
    filledColor: "#019287",
    size: 30
  };
  numbers: number[];
  rating: number = 0;

  saveButton = {
    text: "Сохранить",
    type: "submit",
    isDetailsButton: true
  };

  deleteButton = {
    text: "Удалить",
    type: "button",
    isDetailsButton: true
  };

  dateMask = "0d/0M/0000";

  detailsForm: FormGroup;

  constructor(private dateService: DateService, private formBuilder: FormBuilder) {
    this.numbers = Array(5)
      .fill(0)
      .map((x, i) => i + 1);
  }

  initData() {
    this.detailsForm = this.formBuilder.group({
      title: [this.props.title, [Validators.required]],
      description: [this.props.description ? this.props.description : "Описание"],
      dateStart: [this.dateService.getParsedDate(this.props.date[0]), [Validators.required]],
      dateEnd: [this.dateService.getParsedDate(this.props.date[1])]
    });
    if (this.props.rating) {
      this.rating = this.props.rating;
    }
  }
  saveButtonHandler() {
    if (this.detailsForm.valid) {
      this.saveButtonEmitter.emit(this.detailsForm);
    }
  }
  deleteButtonHandler() {
    this.deleteButtonEmitter.emit();
  }

  starClickHandler(id: number) {
    if (!this.isNotEditable) {
      this.rating = id + 1;
      this.starClickEmitter.emit(id + 1);
    }
  }
  ngOnInit() {
    this.initData();
  }
  ngOnChanges() {
    if (typeof this.detailsForm !== "undefined") {
      this.detailsForm.setValue({
        title: this.props.title,
        description: this.props.description ? this.props.description : "Описание",
        dateStart: this.dateService.getParsedDate(this.props.date[0]),
        dateEnd: this.dateService.getParsedDate(this.props.date[1])
      });
    }
  }
  ngOnDestroy() {}
}
