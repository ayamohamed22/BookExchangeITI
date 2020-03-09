import { SharedModule } from "./../shared/shared.module";
import { LoginRoutingModule } from "./login-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { LoginPageComponent } from "./login-page.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [FormsModule, ReactiveFormsModule, LoginRoutingModule, SharedModule],
  exports: [LoginPageComponent]
})
export class LoginModule {}
