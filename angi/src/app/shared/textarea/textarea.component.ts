import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-textarea",
  templateUrl: "./textarea.component.html",
  styleUrls: ["./textarea.component.scss"]
})
export class TextareaComponent implements OnInit {
  @Input() props: {
    text: string;
    type: string;
    isSidebar: boolean;
  };

  constructor() {}

  ngOnInit() {}

  getClass(): string {
    let className: string = "textarea";

    if (this.props.isSidebar) {
      className += " sidebar__textarea";
    }
    return className;
  }

  getLabelClass(): string {
    return "label";
  }

  getText(): string {
    return this.props.text || "";
  }
}
