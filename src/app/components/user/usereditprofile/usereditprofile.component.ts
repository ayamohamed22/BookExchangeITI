import { LoginService } from "./../../../services/user/login/login.service";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user/user/user.service";
import { userInfo } from "os";

@Component({
  selector: "app-usereditprofile",
  templateUrl: "./usereditprofile.component.html",
  styleUrls: ["./usereditprofile.component.css"]
})
export class UsereditprofileComponent implements OnInit {
  user: User;
  loaded = false;
  constructor(
    private router: ActivatedRoute,
    private service: UserService,
    private loginService: LoginService,
    private route: Router
  ) {}

  ngOnInit() {
    if (this.loginService.isLoggedInNew()) {
      let userId = this.router.snapshot.parent.params["id"];
      this.service.getById(userId).subscribe(res => {
        this.user = res;
        this.loaded = true;
      });
    } else {
      this.route.navigate(["/login"]);
    }
  }

  updateUser(userForm) {
    let userId = this.router.snapshot.parent.params["id"];
    let user = this.user;
    // console.log(userId);
    // console.log(userForm);

    this.service.update(userForm).subscribe(res => {
      this.user = res;
    });

    //this.user[index]
    // this.service.update()
  }
}
