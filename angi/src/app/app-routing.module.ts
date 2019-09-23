import { IndexGuard } from './authentication/index.guard';
import { LoginComponent } from "./auth/login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { IndexComponent } from "./index/index.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ResetComponent } from "./auth/reset/reset.component";
import { AuthGuard } from "./authentication/auth.guard";
import { DashboardComponent } from "./index/dashboard/dashboard.component";
import { DetailsComponent } from "./index/details/details.component";

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  {
    path: "auth",
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "reset",
        component: ResetComponent
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "index",
    component: IndexComponent,
    canActivate: [IndexGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      {
        path: "details/:id",
        component: DetailsComponent
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  { path: "**", redirectTo: "index", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
