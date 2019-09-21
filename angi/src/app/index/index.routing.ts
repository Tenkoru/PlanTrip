import { DetailsComponent } from "./details/details.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index.component";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      {
        path: "details/:id",
        component: DetailsComponent
      }
    ]
  }
];

export const IndexRouts = RouterModule.forChild(routes);
