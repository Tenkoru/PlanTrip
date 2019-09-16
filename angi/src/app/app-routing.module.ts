import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "auth", component: AuthComponent },
  { path: "index", component: IndexComponent },

  { path: "**", redirectTo: "index" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
