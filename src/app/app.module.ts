import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { IvGroupFilterModule } from "./iv-group-filter/iv-group-filter.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IvGroupFilterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
