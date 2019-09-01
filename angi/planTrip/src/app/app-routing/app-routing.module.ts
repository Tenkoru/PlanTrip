import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingComponent } from "./app-routing.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [AppRoutingComponent],
  exports: [RouterModule, AppRoutingComponent],
})
export class AppRoutingModule {}
