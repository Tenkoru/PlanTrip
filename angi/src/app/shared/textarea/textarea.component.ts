import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-textarea",
  templateUrl: "./textarea.component.html",
  styleUrls: ["./textarea.component.scss"]
})
export class TextareaComponent implements OnInit {
  @Input() props: {
    text: String;
    type: String;
    isSidebar: boolean;
  };

  constructor() {}

  ngOnInit() {}

  getClass() {
    let className = "textarea";

    if (this.props.isSidebar) {
      className += " sidebar__textarea";
    }
    return className;
  }

  getLabelClass() {
    return "label";
  }

  getText() {
    return this.props.text || "";
  }
}
