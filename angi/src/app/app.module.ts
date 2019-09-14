import { IndexModule } from './index/index.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthModule } from "./auth/auth.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AuthModule,
      HttpClientModule,
      AppRoutingModule,
      IndexModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
