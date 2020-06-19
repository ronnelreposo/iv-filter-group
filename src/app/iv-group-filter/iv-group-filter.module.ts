import { NgModule } from "@angular/core";
import { IvGroupFilterComponent } from "./iv-group-filter.component";
import { CommonModule } from "@angular/common";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ButtonsModule,
    PopoverModule.forRoot(),
    CommonModule
  ],
  entryComponents: [],
  declarations: [IvGroupFilterComponent],
  providers: [],
  exports: [IvGroupFilterComponent]
})
export class IvGroupFilterModule {}
