import { RouterModule } from "@angular/router";
import { LoginPageComponent } from "./login-page.component";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
const routes: Routes = [{ path: "login", component: LoginPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
