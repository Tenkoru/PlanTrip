import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingComponent } from "./app-routing.component";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { ResetComponent } from '../auth/reset/reset.component';
import { AuthComponent } from '../auth/auth.component';
import { IndexComponent } from '../index/index.component';

const routes: Routes = [
  { path: "", component: AuthComponent },
  { path: "index", component: IndexComponent },

  { path: "**", redirectTo: "index" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [AppRoutingComponent],
  exports: [RouterModule, AppRoutingComponent],
})
export class AppRoutingModule {}
