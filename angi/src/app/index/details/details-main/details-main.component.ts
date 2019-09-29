import { DateService } from './../../../services/date.service';
import { Subscription } from "rxjs";
import { DetailsService } from "./../details.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Trip } from "src/app/app.trip";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IDatePickerConfig } from 'ng2-date-picker';

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
    allowMultiSelect: true,
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
    type: "button",
    isDetailsButton: true
  };

  deleteButton = {
    text: "Удалить",
    type: "button",
    isDetailsButton: true
  };

  isDashSubscription: Subscription;

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
      date: [this.dateService.getParsedDates(this.props.date), [Validators.required]]
    });
    if (this.props.rating) {
      this.rating = this.props.rating;
    }
  }
  saveButtonHandler() {
    this.saveButtonEmitter.emit(this.detailsForm);
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
  ngOnInit() {}
  ngOnChanges() {
    this.initData();
  }
  ngOnDestroy() {
    if (typeof this.isDashSubscription !== "undefined") {
      this.isDashSubscription.unsubscribe();
    }
  }
}
