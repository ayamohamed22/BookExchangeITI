import { Router } from "@angular/router";
import { User } from "./../../models/user.model";
import { RegisterService } from "./../../services/user/register/register.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-up-page",
  templateUrl: "./sign-up-page.component.html",
  styleUrls: ["./sign-up-page.component.css"]
})
export class SignUpPageComponent implements OnInit {
  constructor(private service: RegisterService, private router: Router) {}

  ngOnInit() {}
  submit(value: User) {
    this.service.register(value).subscribe(res => {
      console.log(res);
      this.router.navigate(["login"]);
    });

    console.log(value);
  }
}
