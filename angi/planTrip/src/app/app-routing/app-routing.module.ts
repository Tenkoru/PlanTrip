import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingComponent } from "./app-routing.component";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { ResetComponent } from '../auth/reset/reset.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "reset", component: ResetComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [AppRoutingComponent],
  exports: [RouterModule, AppRoutingComponent],
})
export class AppRoutingModule {}
