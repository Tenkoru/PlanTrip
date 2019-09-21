import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  { path: "", redirectTo: 'index', pathMatch: "full" },
  { path: "auth", component: AuthComponent },
  { path: "index", component: IndexComponent },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
