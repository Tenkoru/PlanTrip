import { ResetComponent } from './auth/reset/reset.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  { path: "", component: AuthComponent },
  { path: "auth", component: AuthComponent, children: [
    {
      path: "login",
      component: LoginComponent,
    },
    {
      path: "register",
      component: RegisterComponent,
    },
    {
      path: "reset",
      component: ResetComponent,
    },
  ] },
  { path: "index", component: IndexComponent },

  { path: "**", redirectTo: "index" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
