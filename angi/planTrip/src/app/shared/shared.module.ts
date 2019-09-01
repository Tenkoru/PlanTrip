import { BackArrowComponent } from "./back-arrow/back-arrow.component";
import { ButtonComponent } from "./button/button.component";
import { LabelComponent } from "./label/label.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponent } from "./shared.component";
import { LinkComponent } from "./link/link.component";
import { AngularSvgIconModule } from "angular-svg-icon";

@NgModule({
  imports: [CommonModule, AngularSvgIconModule],
  declarations: [
    SharedComponent,
    LabelComponent,
    ButtonComponent,
    LinkComponent,
    BackArrowComponent
  ],
  exports: [LabelComponent, ButtonComponent, LinkComponent, BackArrowComponent]
})
export class SharedModule {}
