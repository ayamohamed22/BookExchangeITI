import { SignUpRoutingModule } from "./signup-routing.module";
import { SharedModule } from "./../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { SignUpPageComponent } from "./sign-up-page.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SignUpRoutingModule
  ],
  exports: [SignUpPageComponent]
})
export class SignUpModule {}
