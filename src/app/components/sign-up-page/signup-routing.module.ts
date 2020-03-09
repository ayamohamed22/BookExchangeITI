import { RouterModule } from "@angular/router";
import { SignUpPageComponent } from "./sign-up-page.component";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "signup", component: SignUpPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule {}
