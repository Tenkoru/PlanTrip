import { SharedModule } from './../../shared/shared.module';
import { DashboardFilterComponent } from './dashboard-header/dashboard-filter/dashboard-filter.component';
import { DashboardGridComponent } from './dashboard-header/dashboard-grid/dashboard-grid.component';
import { DashboardSearchComponent } from './dashboard-header/dashboard-search/dashboard-search.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardHeaderComponent } from "./dashboard-header/dashboard-header.component";
import { DashboardMainComponent } from "./dashboard-main/dashboard-main.component";
import { AngularSvgIconModule } from "angular-svg-icon";

@NgModule({
  imports: [CommonModule, AngularSvgIconModule, SharedModule],
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardMainComponent,
    DashboardSearchComponent,
    DashboardGridComponent,
    DashboardFilterComponent,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}