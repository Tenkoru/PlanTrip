import { DashboardModule } from "./dashboard/dashboard.module";
import { SharedModule } from "./../shared/shared.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HeaderBurgerComponent } from "./header/header-top/header-burger/header-burger.component";
import { AppRoutingModule } from "./../app-routing.module";
import { HeaderBottomComponent } from "./header/header-bottom/header-bottom.component";
import { HeaderTopComponent } from "./header/header-top/header-top.component";
import { HeaderComponent } from "./header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index.component";
import { SidebarNavigationComponent } from "./sidebar/sidebar-navigation/sidebar-navigation.component";
import { SidebarBottomComponent } from "./sidebar/sidebar-bottom/sidebar-bottom.component";
import { SidebarNewComponent } from "./sidebar/sidebar-new/sidebar-new.component";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularSvgIconModule,
    SharedModule,
    DashboardModule
  ],
  declarations: [
    IndexComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    HeaderBurgerComponent,
    FooterComponent,
    SidebarComponent,
    SidebarNavigationComponent,
    SidebarBottomComponent,
    SidebarNewComponent
  ]
})
export class IndexModule {}
