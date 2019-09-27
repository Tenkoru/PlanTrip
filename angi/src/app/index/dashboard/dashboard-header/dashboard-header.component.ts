import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-dashboard-header",
  templateUrl: "./dashboard-header.component.html",
  styleUrls: ["./dashboard-header.component.scss"]
})
export class DashboardHeaderComponent implements OnInit {
  constructor(private formbuilder: FormBuilder) {}

  @Output() filterEmitter = new EventEmitter();

  filterGroup: FormGroup;

  filterSubscription: Subscription;

  initForm(): void {
    this.filterGroup = this.formbuilder.group({
      search: this.formbuilder.group({
        search: ["", [Validators.required]],
      }),
      filter: this.formbuilder.group({
        select: [""],
        options: [
          {
            text: "Сортировать по названию",
            value: "name"
          },
          {
            text: "Сортировать по дате",
            value: "date"
          },
          {
            text: "Сортировать по рейтингу",
            value: "stars"
          }
        ]
      })
    });
  }

  ngOnInit() {
    this.initForm();
    this.filterSubscription = this.filterGroup.valueChanges.subscribe(value => {
      this.filterEmitter.emit(value);
    });
  }
  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }
}