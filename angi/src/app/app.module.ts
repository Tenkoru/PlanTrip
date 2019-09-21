import { IndexModule } from "./index/index.module";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "./app.component";
import { InMemoryDataService } from "./InMemoryData.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    IndexModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
