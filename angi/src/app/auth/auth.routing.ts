import { ResetComponent } from "./reset/reset.component";
import { RegisterComponent } from "./register/register.component";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
      {
        path: "register",
        component: RegisterComponent
      },
      { path: "reset", component: ResetComponent }
    ]
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
